import Link from "next/link";
import React from "react";
import useCandidates from "../../hooks/useCandidates";
import useMe from "../../hooks/useMe";
import { isVotingDay } from "../../utils/isVotingDay";
import IconPicture from "./IconPicture";

const CandidateBox: React.FC<{}> = () => {
  const { data: candidates } = useCandidates();
  return (
    <div>
      {/* <div className="flex flex-col justify-center py-5 space-y-10">
        <p className="text-lg font-light tracking-wide text-white ">
          Berlangsung pada tanggal 27 Nov 2021
        </p>
      </div> */}
      <div className="grid grid-cols-6">
        {candidates?.map((candidate, idx) => (
          <IconPicture
            count={candidates.length}
            idx={idx}
            src={candidate.photo}
            key={candidate.number}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <Link href="/voting">
          <a className="z-10 p-3 pl-6 pr-6 text-xl font-bold transition-colors duration-700 transform bg-white rounded-lg shadow-md text-primary hover:bg-primary hover:text-white">
            {isVotingDay() ? "Pilih Ketua Sekarang!" : "Lihat Profil Calon"}
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
      <div className="z-10 flex flex-row justify-center p-3 pl-6 pr-6 my-4">
        <IconPicture name={user.vote.name} src={user.vote.photo} />
      </div>
    </div>
  );
};

export default CandidateBox;
