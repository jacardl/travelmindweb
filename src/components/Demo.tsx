import React, { useState } from 'react';
import { Bot, User, RotateCw, Zap } from 'lucide-react';

const Demo: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const demoText = "TravelMind AI has generated a compelling description for the stunning beaches of Bali, highlighting the crystal-clear waters, volcanic black sand beaches, and vibrant coral reefs. The content is optimized for conversion with emotional language that appeals to adventure seekers and relaxation enthusiasts alike. This content is ready for distribution across your website, social media channels, and email campaigns.";
      setResult(demoText);
      setPreviewImage('https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="demo" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience TravelMind AI in Action
          </h2>
          <p className="text-lg text-gray-300">
            See how our AI generates compelling tourism content in seconds
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold flex items-center">
                  <Bot className="mr-2 h-5 w-5 text-primary-400" />
                  AI Content Generator
                </h3>
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium">
                  Demo Mode
                </span>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
                    Describe the tourism content you need
                  </label>
                  <textarea
                    id="prompt"
                    rows={3}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., Create a compelling description of Bali's beaches for a luxury travel website"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={!prompt.trim() || isLoading}
                    className={`flex-1 px-5 py-3 rounded-lg font-medium flex items-center justify-center ${
                      !prompt.trim() || isLoading
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    } transition-colors`}
                  >
                    {isLoading ? (
                      <>
                        <RotateCw className="animate-spin h-4 w-4 mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Zap className="h-4 w-4 mr-2" />
                        Generate Content
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setPrompt('');
                      setResult('');
                      setPreviewImage('');
                    }}
                    className="px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
            
            {result && (
              <div className="mt-8 border-t border-gray-700 pt-6 animate-fadeIn">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h4 className="text-md font-medium text-white">TravelMind AI</h4>
                      <span className="ml-2 text-xs text-gray-400">Just now</span>
                    </div>
                    <div className="mt-2 text-gray-300 space-y-4">
                      <p>{result}</p>
                      
                      {previewImage && (
                        <div className="mt-4">
                          <h5 className="text-sm font-medium text-gray-300 mb-2">Generated Content Preview:</h5>
                          <div className="rounded-lg overflow-hidden">
                            <img src={previewImage} alt="Content Preview" className="w-full h-auto" />
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Distribution Channels:</h5>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Website Ready</span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Social Media Optimized</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Email Campaign Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;