
import { X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DataPoint {
  generation: number;
  unsafePercentage: number;
  isTopPerformer: boolean;
  id: string;
  prompt: string;
  response: string;
  metrics: {
    refusal_similarity: number;
    fitness: number;
    is_safe: number;
    response_length: number;
    combined_score: number;
    answer_rate: number;
  };
}

interface DataPointModalProps {
  dataPoint: DataPoint;
  onClose: () => void;
}

export const DataPointModal = ({ dataPoint, onClose }: DataPointModalProps) => {
  const pointNumber = dataPoint.id.split('-').pop();
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Generation {dataPoint.generation}, Point {pointNumber}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Unsafe %: {dataPoint.unsafePercentage.toFixed(2)}%
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
              <h3 className="font-medium text-red-600">Jailbreak Prompt</h3>
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
              <p className="text-sm text-gray-700">
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
              <span className="text-gray-600">Fitness:</span>
              <span className="ml-2 font-medium">{(dataPoint.metrics.fitness * 100).toFixed(1)}%</span>
            </div>
            <div>
              <span className="text-gray-600">Is Safe:</span>
              <span className={`ml-2 font-medium ${dataPoint.metrics.is_safe ? 'text-green-600' : 'text-red-600'}`}>
                {dataPoint.metrics.is_safe ? 'True' : 'False'}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Response Length:</span>
              <span className="ml-2 font-medium">{dataPoint.metrics.response_length}</span>
            </div>
            <div>
              <span className="text-gray-600">Combined Score:</span>
              <span className="ml-2 font-medium">{(dataPoint.metrics.combined_score * 100).toFixed(1)}%</span>
            </div>
            <div>
              <span className="text-gray-600">Answer Rate:</span>
              <span className={`ml-2 font-medium ${dataPoint.metrics.answer_rate ? 'text-green-600' : 'text-red-600'}`}>
                {dataPoint.metrics.answer_rate ? 'True' : 'False'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
