
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface DataPoint {
  id: string;
  generation: number;
  parent_id: string | null;
  iteration_found: number;
  report_for_iteration: number;
  program_timestamp: number;
  report_timestamp: number;
  language: string;
  metrics: {
    is_safe: number;
    refusal_similarity: number;
    response_raw_length: number;
    response_log_length: number;
    harmful_score: number;
    composite_fitness: number;
  };
  prompt: string;
  response: string;
  label: string;
  unsafePercentage: number;
  isTopPerformer: boolean;
  fitness_score: number;
}

interface ScatterPlotProps {
  data: DataPoint[];
  onDataPointClick: (dataPoint: DataPoint) => void;
}

export const ScatterPlot = ({ data, onDataPointClick }: ScatterPlotProps) => {
  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    const isTopPerformer = payload.isTopPerformer;
    
    return (
      <circle
        cx={cx}
        cy={cy}
        r={isTopPerformer ? 6 : 4}
        fill={isTopPerformer ? "#ea580c" : "#92400e"}
        stroke="white"
        strokeWidth={1}
        style={{ cursor: 'pointer' }}
        onClick={() => onDataPointClick(payload)}
      />
    );
  };

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 60,
            left: 60,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" stroke="#e5e7eb" />
          <XAxis
            type="number"
            dataKey="report_for_iteration"
            name="Iteration"
            domain={[1, 'dataMax']}
            axisLine={{ stroke: '#6b7280' }}
            tickLine={{ stroke: '#6b7280' }}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            label={{ value: 'Iteration Number', position: 'insideBottom', offset: -5, style: { textAnchor: 'middle', fill: '#6b7280' } }}
          />
          <YAxis
            type="number"
            dataKey="fitness_score"
            name="Fitness Score"
            domain={['dataMin', 'dataMax']}
            axisLine={{ stroke: '#6b7280' }}
            tickLine={{ stroke: '#6b7280' }}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            label={{ value: 'Fitness Score', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6b7280' } }}
          />
          <Scatter data={data} shape={<CustomDot />} />
        </ScatterChart>
      </ResponsiveContainer>
      
      {/* Legend and Status */}
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-orange-600 border-2 border-white"></div>
            <span className="text-sm text-gray-600">Top performers (fitness ≥ 2.0)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-yellow-800 border border-white"></div>
            <span className="text-sm text-gray-600">Other attempts</span>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Total Attempts: {data.length}
        </div>
      </div>
    </div>
  );
};
