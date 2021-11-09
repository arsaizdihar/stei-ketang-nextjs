import React from "react";

const CandidateBox: React.FC<{
  name: string;
}> = ({ name }) => {
  return (
    <div className="flex flex-col mx-2 my-2 text-lg bg-white rounded-lg w-44 h-60">
      <div className="w-full h-full bg-gray-400 rounded-t-lg"></div>
      <h2 className="py-2 text-base font-semibold text-center ">{name}</h2>
    </div>
  );
};

export default CandidateBox;
