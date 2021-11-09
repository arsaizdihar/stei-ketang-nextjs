import type { NextPage } from "next";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import TopMenu from "../src/components/main/TopMenu";
import IconPicture from "../src/components/other/IconPicture";
import AgendaComp from "../src/components/other/AgendaComp";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <Header title="Home" />
      <Layout>
        <div className="flex flex-col pb-16">
          <div className="w-full px-6 py-6 bg-gradient-to-b from-primary to-tertiary ">
            {/* Top Menu */}
            <TopMenu />

            {/* Jargon */}
            <div className="flex flex-col justify-center py-5">
              <h2 className="text-4xl font-semibold text-white">
                Pemilihan Ketua Angkatan STEI 2021
              </h2>
            </div>

            {/* Candidate List */}
            <div className="flex flex-col justify-center py-5 space-y-10">
              <p className="text-lg font-light tracking-wide text-white ">
                Berlangsung dari __/__/__ s.d. __/__/__
              </p>

              <div className="flex flex-wrap justify-start overflow-hidden">
                <IconPicture name="lorem" />
                <IconPicture name="ipsum" />
                <IconPicture name="dolor" />
                <IconPicture name="amet" />
                <IconPicture name="hehe" />
                <IconPicture name="boah" />
              </div>
            </div>
          </div>

          <button className="z-10 p-3 pl-6 pr-6 -mt-6 text-xl font-bold transition-colors duration-700 transform bg-white rounded-lg shadow-md mx-14 md:mx-36 text-primary hover:bg-primary hover:text-white">
            Pilih Ketua Sekarang!
          </button>

          {/* Agenda */}
          <div className="z-0 flex-grow px-6 py-6 -mt-6 space-y-6 bg-white">
            <h1 className="pt-4 text-4xl font-bold">Agenda</h1>
            <div className="space-y-4">
              <AgendaComp content="Pemilihan dibuka" date="32 Feb" />
              <AgendaComp content="Pemilihan ditutup" date="32 Feb" />
              <AgendaComp content="Rekapitulasi suara" date="32 Feb" />
              <AgendaComp content="Pemilihan dibuka" date="32 Feb" />
              <AgendaComp content="Pemilihan ditutup" date="32 Feb" />
              <AgendaComp content="Rekapitulasi suara" date="32 Feb" />
              <AgendaComp content="Pemilihan dibuka" date="32 Feb" />
              <AgendaComp content="Pemilihan ditutup" date="32 Feb" />
              <AgendaComp content="Rekapitulasi suara" date="32 Feb" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
