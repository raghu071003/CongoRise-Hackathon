import React from 'react';

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div className="bg-red-500 text-white text-center p-2 rounded-lg">
      {error}
    </div>
  );
};

export default ErrorMessage;
