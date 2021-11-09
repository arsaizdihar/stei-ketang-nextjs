import type { NextPage } from "next";
import Header from "../../src/components/main/CustomHead";
import Layout from "../../src/components/main/Layout";
import ProgressBar from "../../src/components/other/Progressbar";
import CandidateChoose from "../../src/components/other/CandidateChoose";
import React from "react";
import Image from "next/image";

const ConfirmCandidate: NextPage = () => {
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

        <div className="flex flex-col items-center w-full px-4 pt-28 bg-gradient-to-b from-primary to-tertiary">
          <h2 className="flex flex-row justify-center w-full mb-4 text-4xl font-semibold text-white">
            Konfirmasi Pilihan
          </h2>

          <CandidateChoose name="Nuha" />
          <div className="fixed bottom-0 flex flex-col justify-center flex-grow w-full max-w-screen-sm px-12 py-2 space-y-4">
            <button className="flex-grow p-3 pl-12 pr-12 text-lg font-bold text-center text-white transition-colors duration-700 transform rounded-lg shadow-md bg-primary md:mx-48 hover:bg-gray-100 hover:text-primary">
              Konfirmasi
            </button>
            <button className="flex-grow p-3 pl-12 pr-12 text-lg font-bold text-center transition-colors duration-700 transform bg-white rounded-lg shadow-md text-primary md:mx-48 hover:bg-red-400 hover:text-white">
              Batal
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConfirmCandidate;
