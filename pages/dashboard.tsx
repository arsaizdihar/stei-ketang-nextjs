import type { NextPage } from "next";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import TopMenu from "../src/components/main/TopMenu";
import CandidateBox, {
  CandidateChosen,
} from "../src/components/other/CandidateBox";
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
            <CandidateChosen />
          </div>

          {/* Agenda */}
          <div className="z-0 flex-grow px-6 py-6 -mt-12 space-y-6 bg-white">
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
