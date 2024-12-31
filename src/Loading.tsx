import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-300 via-gray-100 to-white loading">
    <div className=" flex items-center flex-col">
      <div className="w-12 h-12 border-5 border-t-4 border-t-white border-gray-400 rounded-full animate-spin"></div>
      <p className="mt-4 text-white text-lg font-semibold tracking-wide"  style={{fontFamily:'Unbounded'}}>
        Loading<span className="text-white">...</span>
      </p>
      <p className="text-sm text-white mt-2 font-semibold"  >
        Please wait, your content is on the way.
      </p>
    </div>
  </div>
  );
};