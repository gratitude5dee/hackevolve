
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
    fitness: number;
    is_safe: number;
    refusal_similarity: number;
    response_length: number;
    combined_score: number;
    answer_rate: number;
  };
  prompt: string;
  response: string;
  label: string;
  unsafePercentage: number;
  isTopPerformer: boolean;
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
        r={isTopPerformer ? 4 : 2}
        fill={isTopPerformer ? "#ea580c" : "#92400e"}
        stroke="none"
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
            domain={[0, 10]}
            tickCount={11}
            axisLine={{ stroke: '#6b7280' }}
            tickLine={{ stroke: '#6b7280' }}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            label={{ value: 'Iteration', position: 'insideBottom', offset: -5, style: { textAnchor: 'middle', fill: '#6b7280' } }}
          />
          <YAxis
            type="number"
            dataKey="unsafePercentage"
            name="Unsafe Percentage"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            axisLine={{ stroke: '#6b7280' }}
            tickLine={{ stroke: '#6b7280' }}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            label={{ value: 'Unsafe Percentage', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6b7280' } }}
          />
          <Scatter data={data} shape={<CustomDot />} />
        </ScatterChart>
      </ResponsiveContainer>
      
      {/* Legend and Status */}
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-orange-600"></div>
            <span className="text-sm text-gray-600">Top performers</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-yellow-800"></div>
            <span className="text-sm text-gray-600">Other attempts</span>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Current Iteration: {Math.max(...data.map(d => d.report_for_iteration))}/5
        </div>
      </div>
    </div>
  );
};
