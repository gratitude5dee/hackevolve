
import { X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  fitness_score: number;
}

interface DataPointModalProps {
  dataPoint: DataPoint;
  onClose: () => void;
}

export const DataPointModal = ({ dataPoint, onClose }: DataPointModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Attempt #{dataPoint.report_for_iteration}
            </h2>
            <p className="text-sm text-gray-600">
              Fitness Score: {dataPoint.fitness_score?.toFixed(2)}
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Jailbreak Prompt */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <h3 className="font-medium text-red-600">Test Prompt</h3>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                {dataPoint.prompt}
              </p>
            </div>
          </div>
          
          {/* Model Response */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Model Response</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {dataPoint.response}
              </p>
            </div>
          </div>
        </div>
        
        {/* Metrics Footer */}
        <div className="p-6 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Refusal Similarity:</span>
              <span className="ml-2 font-medium">{(dataPoint.metrics.refusal_similarity * 100).toFixed(1)}%</span>
            </div>
            <div>
              <span className="text-gray-600">Fitness Score:</span>
              <span className="ml-2 font-medium">{dataPoint.fitness_score?.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-gray-600">Is Safe:</span>
              <span className={`ml-2 font-medium ${dataPoint.metrics.is_safe ? 'text-green-600' : 'text-red-600'}`}>
                {dataPoint.metrics.is_safe ? 'True' : 'False'}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Response Length:</span>
              <span className="ml-2 font-medium">{dataPoint.metrics.response_raw_length}</span>
            </div>
            <div>
              <span className="text-gray-600">Harmful Score:</span>
              <span className="ml-2 font-medium">{dataPoint.metrics.harmful_score?.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-gray-600">Composite Fitness:</span>
              <span className="ml-2 font-medium">{dataPoint.metrics.composite_fitness?.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
