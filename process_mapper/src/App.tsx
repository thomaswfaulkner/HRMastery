import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  GitBranch, 
  Book, 
  FileCheck, 
  AlertTriangle, 
  Upload,
  Search,
  Settings
} from 'lucide-react';

const IntegratedSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState('processes');
  const [documentText, setDocumentText] = useState('');
  const [analysisResult, setAnalysisResult] = useState<{
    processes: string[],
    roles: string[],
    systems: string[],
    compliance: string[]
  } | null>(null);

  const analyzeDocument = () => {
    setAnalysisResult({
      processes: ['Customer Onboarding', 'Risk Assessment', 'Account Setup'],
      roles: ['Account Manager', 'Risk Analyst', 'System Admin'],
      systems: ['CRM', 'Risk Engine', 'Account System'],
      compliance: ['KYC Check', 'AML Verification', 'Credit Assessment']
    });
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case 'processes':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Process Designer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gray-50 rounded border p-4 text-center text-gray-500">
                Process Design Interface
              </div>
            </CardContent>
          </Card>
        );

      case 'documents':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Document Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full h-64 p-4 border rounded mb-4"
                placeholder="Paste document text or upload a file..."
                value={documentText}
                onChange={(e) => setDocumentText(e.target.value)}
              />
              <div className="flex gap-2">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={analyzeDocument}
                >
                  Analyze
                </button>
                <button className="border px-4 py-2 rounded hover:bg-gray-50">
                  Upload File
                </button>
              </div>
              {analysisResult && (
                <div className="mt-4">
                  <h3 className="font-medium">Analysis Results:</h3>
                  <ul className="list-disc list-inside">
                    {analysisResult.processes.map((process) => (
                      <li key={process}>{process}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex gap-4">
        <div className="w-48">
          <button
            className={`w-full flex items-center gap-2 p-2 rounded text-left ${
              activeTab === 'processes' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('processes')}
          >
            <GitBranch size={16} />
            Processes
          </button>
          <button
            className={`w-full flex items-center gap-2 p-2 rounded text-left ${
              activeTab === 'documents' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('documents')}
          >
            <FileText size={16} />
            Documents
          </button>
        </div>
        <div className="flex-1">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

// **Export as Default**
export default IntegratedSuite;
