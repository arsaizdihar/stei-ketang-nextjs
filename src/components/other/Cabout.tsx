import React from "react";

const CandidateAbout: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow w-full h-full pb-12 space-y-6 text-primary">
      <div className="space-y-2">
        <h2 className="flex justify-start text-2xl font-bold">Biografi</h2>
        <p className="flex justify-start text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="flex justify-start text-2xl font-bold">Visi dan Misi</h2>
        <ul className="flex flex-col text-base text-primary">
          <li>1. Lorem Ipsum</li>
          <li>2. Lorem Ipsum</li>
          <li>3. Lorem Ipsum</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="flex justify-start text-2xl font-bold">Program Kerja</h2>
        <ul className="flex flex-col text-base text-primary">
          <li>1. Lorem Ipsum</li>
          <li>2. Lorem Ipsum</li>
          <li>3. Lorem Ipsum</li>
        </ul>
      </div>
    </div>
  );
};

export default CandidateAbout;
