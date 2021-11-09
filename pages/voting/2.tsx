import type { NextPage } from "next";
import Header from "../../src/components/main/CustomHead";
import Layout from "../../src/components/main/Layout";
import ProgressBar from "../../src/components/other/Progressbar";
import CandidateAbout from "../../src/components/other/Cabout";
import CandidateSocmed from "../../src/components/other/CSocmed";

import { Tab } from "@headlessui/react";
import React from "react";
import Image from "next/image";

const CandidateBio: NextPage = () => {
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

        <div className="relative flex flex-col items-center w-full min-h-full pt-20 bg-primary">
          <div className="z-20 flex flex-col mx-2 my-2 -mb-12 text-lg w-52 h-72">
            <div className="w-full h-full bg-gray-500 rounded-lg"></div>
          </div>
          <div className="flex flex-col items-center w-full h-full px-4 pt-16 bg-white rounded-t-xl">
            <h2 className="text-2xl font-semibold text-black">Orang 1</h2>
            <Tab.Group>
              <Tab.List className="flex flex-row items-center w-full py-4 justify-evenly">
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-primary font-bold flex flex-col items-center w-full border-b-2 border-primary transition duration-300"
                      : "bg-white text-black flex flex-col items-center w-full transition duration-300"
                  }
                >
                  <p>Tentang</p>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-primary font-bold flex flex-col items-center w-full border-b-2 border-primary transition duration-300"
                      : "bg-white text-black flex flex-col items-center w-full transition duration-300"
                  }
                >
                  <p>Sosmed</p>
                </Tab>

                {/* ... */}
              </Tab.List>
              <Tab.Panels className="w-full">
                <Tab.Panel>
                  <CandidateAbout />
                </Tab.Panel>
                <Tab.Panel>
                  <CandidateSocmed />
                </Tab.Panel>
                {/* ... */}
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="fixed bottom-0 flex justify-center flex-grow w-full max-w-screen-sm px-12 py-2 bg-white">
            <button className="flex-grow p-3 pl-12 pr-12 text-lg font-bold text-center text-white transition-colors duration-700 transform rounded-lg shadow-md bg-primary md:mx-48 hover:bg-gray-100 hover:text-primary">
              Coblos
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CandidateBio;
