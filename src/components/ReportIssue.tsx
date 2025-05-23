
import React, { useState } from 'react';
import { MapPin, Camera, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const ReportIssue = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    location: '',
    description: '',
    photo: null
  });

  const categories = [
    { id: 'pothole', name: 'Pothole', icon: '🕳️', color: 'bg-red-500' },
    { id: 'light', name: 'Street Light', icon: '💡', color: 'bg-yellow-500' },
    { id: 'garbage', name: 'Garbage', icon: '🗑️', color: 'bg-green-500' },
    { id: 'drain', name: 'Drain', icon: '🚰', color: 'bg-blue-500' },
    { id: 'road', name: 'Road Damage', icon: '🛣️', color: 'bg-gray-500' },
    { id: 'other', name: 'Other', icon: '📝', color: 'bg-purple-500' }
  ];

  const steps = [
    { id: 1, name: 'Category', description: 'Select issue type' },
    { id: 2, name: 'Location', description: 'Pin the location' },
    { id: 3, name: 'Details', description: 'Add description & photo' },
    { id: 4, name: 'Review', description: 'Confirm submission' }
  ];

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Simulate submission
    setCurrentStep(5); // Success step
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Issue Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setFormData({ ...formData, category: category.id });
                    nextStep();
                  }}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                    formData.category === category.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pin Issue Location</h2>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
                <p className="text-gray-700 mb-4">Interactive map would appear here</p>
                <button
                  onClick={() => setFormData({ ...formData, location: 'Current Location' })}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Use Current Location
                </button>
              </div>
            </div>
            {formData.location && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">📍 Location set: {formData.location}</p>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Describe the Issue</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Please describe the issue in detail..."
                  rows={4}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors duration-200">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Drag and drop photo here or</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Choose File
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Report</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Category</p>
                <p className="text-lg text-gray-900 capitalize">{formData.category}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Location</p>
                <p className="text-lg text-gray-900">{formData.location}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Description</p>
                <p className="text-lg text-gray-900">{formData.description || 'No description provided'}</p>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors duration-200"
            >
              Submit Report
            </button>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Report Submitted!</h2>
            <p className="text-gray-600 mb-6">Your issue has been received and assigned tracking ID: #CIV-2024-001</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-blue-800 font-medium">Status: Submitted</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Pending Review</span>
              </div>
            </div>
            <button
              onClick={() => {
                setCurrentStep(1);
                setFormData({ category: '', location: '', description: '', photo: null });
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Submit Another Report
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  if (currentStep === 5) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4">
          {renderStepContent()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Report an Issue</h1>
          <p className="text-gray-600">Help us improve your city by reporting issues you encounter</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-2 ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.id}
                  </div>
                  <div className="hidden sm:block">
                    <p className={`font-medium ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-600'}`}>
                      {step.name}
                    </p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block flex-1 h-1 mx-4 rounded ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          {currentStep > 1 && currentStep < 4 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <ArrowLeft size={18} />
                <span>Previous</span>
              </button>
              
              {(formData.location || currentStep < 2) && (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <span>Next</span>
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
