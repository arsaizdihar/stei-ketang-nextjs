import { Transition } from "@headlessui/react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../../src/components/main/CustomHead";
import Layout from "../../src/components/main/Layout";
import AlreadyVoteRedirect from "../../src/components/other/AlreadyVoteRedirect";
import NoLoginRedirect from "../../src/components/other/NoLoginRedirect";

const ConfirmCandidate: NextPage = () => {
  return (
    <>
      <NoLoginRedirect />
      <AlreadyVoteRedirect />
      <Header />
      <Layout>
        <div className="flex flex-col items-center w-full px-8 py-16 text-white bg-gradient-to-b from-primary to-tertiary">
          <h2 className="flex flex-row w-full mb-12 text-4xl font-semibold text-white">
            Selesai!
          </h2>
          <div className="flex flex-col items-center justify-center flex-grow -mt-12">
            <Transition
              as={"div"}
              appear
              show
              enter="transform transition duration-500 ease-in-out"
              enterFrom="scale-0"
              enterTo="scale-100"
            >
              <Image
                src="/icons/check.svg"
                alt="me"
                width="258"
                height="258"
                className="rounded"
              />
            </Transition>
            <p className="flex flex-row justify-center mt-12 text-2xl tracking-wide text-center text-white w- full">
              Datamu sudah masuk sistem kami. Terima kasih sudah memilih ketua
              angkatan STEI 2021!
            </p>
          </div>
          <div className="fixed bottom-0 flex justify-center flex-grow w-full max-w-lg px-12 py-8">
            <Link href="/dashboard">
              <a className="flex-grow p-3 pl-12 pr-12 text-lg font-bold text-center transition-colors duration-700 transform bg-white rounded-lg shadow-md text-primary md:mx-48 hover:bg-primary hover:text-white">
                Beranda
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConfirmCandidate;
