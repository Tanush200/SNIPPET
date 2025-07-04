import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-yellow-500 rounded-full animate-spin"></div>
        <h1 className="text-lg font-semibold tracking-wide animate-pulse">
          Loading, please wait...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
