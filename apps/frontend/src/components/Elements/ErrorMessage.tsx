import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p className="text-sm text-red-500 mt-2">{message}</p>
  );
};

export default ErrorMessage;