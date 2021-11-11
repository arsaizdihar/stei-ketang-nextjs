import React from "react";

interface Props {
  bio: string;
}

const CandidateAbout: React.FC<Props> = ({ bio }) => {
  return (
    <div className="flex flex-col flex-grow w-full h-full pb-12 space-y-6 text-primary">
      <div className="space-y-2">
        <h2 className="flex justify-start text-2xl font-bold">Biografi</h2>
        <p className="flex justify-start text-primary">{bio}</p>
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
