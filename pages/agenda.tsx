import type { NextPage } from "next";
import React from "react";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import TopMenu from "../src/components/main/TopMenu";
import AgendaComp from "../src/components/other/AgendaComp";
import NoLoginRedirect from "../src/components/other/NoLoginRedirect";
import VoteCountdown from "../src/components/other/VoteCountdown";
import agenda from "../src/constants/agenda.json";

const Agenda: NextPage = () => {
  return (
    <>
      <NoLoginRedirect />
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

            <VoteCountdown />

            <div className="flex flex-row justify-between py-5">
              <h2 className="text-2xl font-semibold text-white">
                November 2021
              </h2>
            </div>

            <div className="z-0 flex flex-col flex-grow px-6 py-6 space-y-6 bg-white rounded-lg">
              <h3 className="font-bold text-xl">Tanggal-Tanggal Penting</h3>
              {agenda.map((a, idx) => (
                <AgendaComp
                  content={a.agenda}
                  date={new Date(a.date)}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Agenda;
