import type { NextPage } from "next";
import Header from "../../src/components/main/CustomHead";
import Layout from "../../src/components/main/Layout";
import ProgressBar from "../../src/components/other/Progressbar";
import CandidateBox from "../../src/components/other/CandidateBox";
import React from "react";
import Image from "next/image";

const Candidates: NextPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <header className="fixed z-30 w-full p-4 duration-300 bg-primary ">
          <nav className="flex flex-row items-center justify-between align-middle">
            <div className="w-1/3">
              <div className="flex flex-col items-center justify-center w-10 h-10 p-2 align-middle bg-white rounded-full shadow-lg">
                <Image
                  src={"/icons/arrow.svg"}
                  alt="me"
                  width="26"
                  height="26"
                  className="rounded-full"
                />
              </div>
            </div>
            <ProgressBar />
            <div className="w-1/3"></div>
          </nav>
        </header>

        <div className="flex flex-col items-center w-full px-4 pt-28 bg-primary">
          <h2 className="text-4xl font-semibold text-white">
            Pilih Calon Ketua Angkatan Pilihanmu!
          </h2>

          <div className="grid grid-cols-2 py-4 overflow-hidden">
            <CandidateBox name="Nuha" />
            <CandidateBox name="Nuha" />
            <CandidateBox name="Nuha" />
            <CandidateBox name="Nuha" />
            <CandidateBox name="Nuha" />
            <CandidateBox name="Nuha" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Candidates;
