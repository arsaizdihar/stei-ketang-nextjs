import React from "react";
import { Candidate } from "../../ts/types";

const CandidateAbout: React.FC<Candidate> = ({ bio, detail }) => {
  return (
    <div className="flex flex-col flex-grow w-full h-full pb-12 space-y-6 text-primary">
      {/* <div className="space-y-2">
        <h2 className="flex justify-start text-2xl font-bold">Biografi</h2>
        <p className="flex justify-start text-primary">{bio}</p>
      </div> */}
      <div className="space-y-2">
        <h2 className="flex justify-start text-2xl font-bold">Visi</h2>
        <p className="text-base text-primary mr-4 text-justify">
          {detail.visi.length > 0 && detail.visi[0].text}
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="flex justify-start text-2xl font-bold">Misi</h2>
        <ol className="flex flex-col text-base text-primary list-decimal mx-4 text-justify">
          {detail.misi.map((d) => (
            <li key={d.number}>{d.text}</li>
          ))}
        </ol>
      </div>
      {detail.program.length > 0 && (
        <div className="space-y-2">
          <h2 className="flex justify-start text-2xl font-bold">
            Program Kerja
          </h2>
          <ol className="flex flex-col text-base text-primary list-decimal mx-4 text-justify">
            {detail.program.map((d) => (
              <li key={d.number}>{d.text}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default CandidateAbout;
