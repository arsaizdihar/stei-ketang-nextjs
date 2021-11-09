import type { NextPage } from "next";
import Header from "../../src/components/main/CustomHead";
import Layout from "../../src/components/main/Layout";
import React from "react";
import Image from "next/image";

const ConfirmCandidate: NextPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className="flex flex-col items-center w-full px-8 py-16 text-white bg-gradient-to-b from-primary to-tertiary">
          <h2 className="flex flex-row w-full mb-12 text-4xl font-semibold text-white">
            Selesai
          </h2>
          <Image
            src="/icons/check.svg"
            alt="me"
            width="258"
            height="258"
            className="rounded"
          />
          <p className="flex flex-row justify-center mt-12 text-2xl tracking-wide text-center text-white w- full">
            Datamu sudah masuk sistem kami. Terima kasih sudah memilih ketua
            angkatan STEI 2021!
          </p>
          <div className="fixed bottom-0 flex justify-center flex-grow w-full max-w-screen-sm px-12 py-8">
            <button className="flex-grow p-3 pl-12 pr-12 text-lg font-bold text-center transition-colors duration-700 transform bg-white rounded-lg shadow-md text-primary md:mx-48 hover:bg-primary hover:text-white">
              Beranda
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConfirmCandidate;
