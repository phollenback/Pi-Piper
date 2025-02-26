import React from 'react';

interface LoginStepsProps {
  currentStep: 'select-restaurant' | 'credentials' | 'logged-in';
}

const LoginSteps: React.FC<LoginStepsProps> = ({ currentStep }) => {
  const steps = [
    { id: 'select-restaurant', label: 'Select Restaurant' },
    { id: 'credentials', label: 'Login' },
    { id: 'logged-in', label: 'Logged In' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isPast = steps.findIndex(s => s.id === currentStep) > index;
          
          return (
            <React.Fragment key={step.id}>
              {/* Step Circle */}
              <div className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                    ${isActive ? 'border-blue-600 bg-blue-600 text-white' : 
                      isPast ? 'border-green-500 bg-green-500 text-white' : 
                      'border-gray-300 bg-white text-gray-500'}`}
                >
                  {isPast ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className={`mt-2 text-sm font-medium
                  ${isActive ? 'text-blue-600' : 
                    isPast ? 'text-green-500' : 
                    'text-gray-500'}`}>
                  {step.label}
                </span>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 relative z-0">
                  <div
                    className={`absolute inset-0 
                      ${isPast ? 'bg-green-500' : 'bg-gray-300'}`}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LoginSteps; 