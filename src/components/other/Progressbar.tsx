import React from "react";
import { isVotingDay } from "../../utils/isVotingDay";

const ProgressBar: React.FC<{ number: 1 | 2 | 3 }> = ({ number }) => {
  if (!isVotingDay()) {
    return null;
  }
  return (
    <div className="flex flex-row items-center justify-center align-middle">
      <div className="flex items-center justify-center w-8 h-8 border-2 border-white rounded-full ">
        <p className="text-xs font-semibold text-white">1</p>
      </div>

      <div
        className={`flex items-center w-12 align-middle duration-300 border-t-2 border-white ${
          number > 1 ? "border-white" : "border-dashed"
        }`}
      ></div>

      <div
        className={`flex items-center justify-center w-8 h-8 border-2 ${
          number > 1 ? "border-white" : "bg-gray-600 border-gray-600"
        } rounded-full`}
      >
        <p className="text-xs font-semibold text-white">2</p>
      </div>
      <div
        className={`flex items-center w-12 align-middle duration-300 border-t-2 border-white ${
          number > 2 ? "border-white" : "border-dashed"
        }`}
      ></div>
      <div
        className={`flex items-center justify-center w-8 h-8 border-2 ${
          number > 2 ? "border-white" : "bg-gray-600 border-gray-600"
        } rounded-full`}
      >
        <p className="text-xs font-semibold text-white">3</p>
      </div>
    </div>
  );
};

export default ProgressBar;
