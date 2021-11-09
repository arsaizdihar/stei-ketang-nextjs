import React from "react";

const ProgressBar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center align-middle">
      <div className="flex items-center justify-center w-8 h-8 border-2 border-white rounded-full ">
        <p className="text-xs font-semibold text-white">1</p>
      </div>

      <div className="flex items-center w-12 align-middle duration-300 border-t-2 border-white border-dashed"></div>

      <div className="flex items-center justify-center w-8 h-8 bg-gray-600 border-2 border-gray-600 rounded-full ">
        <p className="text-xs font-semibold text-white">2</p>
      </div>

      <div className="flex items-center w-12 align-middle duration-300 border-t-2 border-white border-dashed"></div>

      <div className="flex items-center justify-center w-8 h-8 bg-gray-600 border-2 border-gray-600 rounded-full ">
        <p className="text-xs font-semibold text-white">3</p>
      </div>
    </div>
  );
};

export default ProgressBar;