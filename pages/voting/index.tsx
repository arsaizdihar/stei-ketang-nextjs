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
            <div className="relative w-full max-w-screen-sm">
              <div className="absolute left-0 ml-2">
                <BackButton link="/dashboard" />
              </div>
              <ProgressBar number={1} />
            </div>
          </nav>
        </header>

        <div className="flex flex-col items-center w-full px-4 pt-28 bg-primary">
          <h2 className="text-4xl font-semibold text-white">
            Pilih Calon Ketua Angkatan
          </h2>

          <div className="grid grid-cols-2 py-4 overflow-hidden w-full justify-items-center sm:px-8">
            {candidates?.map((candidate, idx) =>
              idx == candidates.length - 1 && candidates.length % 2 == 1 ? (
                <div className="col-span-2">
                  <CandidateList
                    name={candidate.name}
                    src={candidate.photo}
                    key={candidate.number}
                    number={candidate.number}
                  />
                </div>
              ) : (
                <CandidateList
                  name={candidate.name}
                  src={candidate.photo}
                  key={candidate.number}
                  number={candidate.number}
                />
              )
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Voting;
