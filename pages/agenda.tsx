import type { NextPage } from "next";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import AgendaComp from "../src/components/other/AgendaComp";
import TopMenu from "../src/components/main/TopMenu";
import React from "react";
import Image from "next/image";

const Agenda: NextPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className="w-full pb-16">
          <div className="flex flex-col w-full h-full px-6 py-6 bg-gradient-to-b from-primary to-tertiary ">
            {/* Top Menu */}
            <TopMenu />

            <div className="flex flex-col justify-center py-5">
              <h2 className="text-4xl font-semibold text-white">
                Agenda Selanjutnya
              </h2>
            </div>

            <div className="flex flex-row items-center justify-center px-6 py-5 align-middle border-2 rounded-md border-fiftiary bg-quartiary">
              <h1 className="flex mr-6 font-extrabold text-white text-7xl">
                7
              </h1>
              <p className="flex text-xl font-bold text-white">
                hari menuju penutupan pemilihan
              </p>
            </div>

            <div className="flex flex-row justify-between py-5">
              <h2 className="text-2xl font-semibold text-white">
                November 2021
              </h2>
              <div className="flex flex-row space-x-5">
                <div>
                  <Image
                    src="/icons/arrowleft.svg"
                    alt="me"
                    width="24"
                    height="24"
                    className="rotate-180"
                  />
                </div>
                <div>
                  <Image
                    src="/icons/arrowright.svg"
                    alt="me"
                    width="24"
                    height="24"
                  />
                </div>
              </div>
            </div>

            <div className="z-0 flex flex-col flex-grow px-6 py-6 space-y-6 bg-white rounded-lg">
              <AgendaComp content="lorem" date="32 March" />
              <AgendaComp content="lorem" date="32 March" />
              <AgendaComp content="lorem" date="32 March" />
              <AgendaComp content="lorem" date="32 March" />
              <AgendaComp content="lorem" date="32 March" />
              <AgendaComp content="lorem" date="32 March" />
              <AgendaComp content="lorem" date="32 March" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Agenda;
