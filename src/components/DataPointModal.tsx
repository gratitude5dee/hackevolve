
import { X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DataPoint {
  generation: number;
  unsafePercentage: number;
  isTopPerformer: boolean;
  id: string;
  unsafeScore: string;
  timestamp: string;
  jailbreakPrompt: string;
  modelResponse: string;
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
                {dataPoint.jailbreakPrompt}
              </p>
            </div>
          </div>
          
          {/* Model Response */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Model Response</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                {dataPoint.modelResponse}
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 text-sm text-gray-600">
          <span>Unsafe Score: {dataPoint.unsafeScore}%</span>
          <span>Timestamp: {dataPoint.timestamp}</span>
        </div>
      </div>
    </div>
  );
};
