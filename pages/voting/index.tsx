import { NextPage } from "next";
import React from "react";
import BackButton from "../../src/components/buttons/BackButton";
import Header from "../../src/components/main/CustomHead";
import Layout from "../../src/components/main/Layout";
import CandidateList from "../../src/components/other/CandidateList";
import NoLoginRedirect from "../../src/components/other/NoLoginRedirect";
import ProgressBar from "../../src/components/other/Progressbar";
import useCandidates from "../../src/hooks/useCandidates";

const Voting: NextPage = () => {
  const { candidates } = useCandidates();
  return (
    <>
      <NoLoginRedirect />
      <Header />
      <Layout>
        <header className="fixed z-30 w-full p-4 duration-300">
          <nav className="flex flex-row items-center justify-center align-middle ">
            <div className="relative w-full max-w-lg">
              <div className="absolute left-0 ml-2">
                <BackButton link="/dashboard" />
              </div>
              <ProgressBar number={1} />
            </div>
          </nav>
        </header>

        <div className="flex flex-col items-center w-full px-4 pt-20 bg-primary">
          <h2 className="text-4xl font-semibold text-white px-8 flex-shrink-0">
            Pilih Calon Ketua Angkatan
          </h2>

          <div className="grid grid-cols-2 py-4 overflow-hidden w-full justify-items-center items-center px-4 flex-grow">
            {candidates?.map((candidate, idx) => (
              <CandidateList
                name={candidate.name}
                src={candidate.photo}
                key={candidate.number}
                number={candidate.number}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Voting;
