
import { useState } from "react";
import { Header } from "@/components/Header";
import { ScatterPlot } from "@/components/ScatterPlot";
import { DataPointModal } from "@/components/DataPointModal";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Generate sample data for the scatter plot
const generateSampleData = () => {
  const data = [];
  for (let generation = 0; generation <= 100; generation++) {
    const numPoints = Math.floor(Math.random() * 20) + 5;
    for (let i = 0; i < numPoints; i++) {
      const isTopPerformer = Math.random() < 0.1;
      data.push({
        generation,
        unsafePercentage: Math.random() * 100,
        isTopPerformer,
        id: `gen-${generation}-point-${i}`,
        prompt: `This is a jailbreak prompt designed to test the safety boundaries of the AI model. Generation ${generation}, attempt ${i}. The prompt attempts to circumvent safety measures through various techniques.`,
        response: `This is the model's response to the jailbreak attempt for generation ${generation}, point ${i}. The response shows how the model handled the safety challenge and whether it maintained appropriate boundaries.`,
        metrics: {
          refusal_similarity: Math.random(),
          fitness: Math.random(),
          is_safe: Math.random() > 0.5 ? 1 : 0,
          response_length: Math.floor(Math.random() * 500) + 50,
          combined_score: Math.random(),
          answer_rate: Math.random() > 0.5 ? 1 : 0
        }
      });
    }
  }
  return data;
};

const sampleData = generateSampleData();

const Index = () => {
  const [selectedDataPoint, setSelectedDataPoint] = useState(null);

  const handleDataPointClick = (dataPoint) => {
    setSelectedDataPoint(dataPoint);
  };

  const handleCloseModal = () => {
    setSelectedDataPoint(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Jailbreak Evolution Analysis
              </h1>
              <p className="text-gray-600">
                Tracking unsafe responses across generations
              </p>
            </div>
            <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Safety Testing
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <ScatterPlot 
            data={sampleData} 
            onDataPointClick={handleDataPointClick}
          />
        </div>
      </main>

      {selectedDataPoint && (
        <DataPointModal 
          dataPoint={selectedDataPoint}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Index;
