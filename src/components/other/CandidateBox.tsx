import Link from "next/link";
import React from "react";
import useCandidates from "../../hooks/useCandidates";
import useMe from "../../hooks/useMe";
import IconPicture from "./IconPicture";

const CandidateBox: React.FC<{}> = () => {
  const { candidates } = useCandidates();
  return (
    <div>
      <div className="flex flex-col justify-center py-5 space-y-10">
        <p className="text-lg font-light tracking-wide text-white ">
          Berlangsung dari __/__/__ s.d. __/__/__
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 overflow-hidden">
        {candidates?.map((candidate) => (
          <IconPicture
            name={candidate.name}
            src={candidate.photo}
            key={candidate.number}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <Link href="/voting">
          <a className="z-10 p-3 pl-6 pr-6 text-xl font-bold transition-colors duration-700 transform bg-white rounded-lg shadow-md text-primary hover:bg-primary hover:text-white">
            Pilih Ketua Sekarang!
          </a>
        </Link>
      </div>
    </div>
  );
};

export const CandidateChosen: React.FC = () => {
  const { user } = useMe();
  if (!user?.vote) return null;
  return (
    <div>
      <h1 className="text-lg text-white">Kamu telah memilih: </h1>
      <div className="z-10 flex flex-row justify-center p-3 pl-6 pr-6">
        <IconPicture name={user.vote.name} src={user.vote.photo} />
      </div>
    </div>
  );
};

export default CandidateBox;
