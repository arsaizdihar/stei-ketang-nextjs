import type { NextPage } from "next";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import Image from "next/image";
import IconPicture from "../src/components/other/IconPicture";
import AgendaComp from "../src/components/other/AgendaComp";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <Header title="Home" />
      <Layout>
        <div className="relative flex flex-col">
          <div className="w-full px-6 py-6 bg-gradient-to-b from-primary to-tertiary ">
            {/* Top Menu */}
            <div className="flex flex-row justify-between">
              <Image
                src="/icons/settings.svg"
                alt="me"
                width="24"
                height="24"
              />
              <p className="text-lg text-white">
                Halo, <span className="font-semibold">Nama</span>!
              </p>
            </div>

            {/* Jargon */}
            <div className="flex flex-col justify-center py-5">
              <h2 className="text-4xl font-semibold text-white">
                Pemilihan Ketua Angkatan STEI 2021
              </h2>
            </div>

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

          <button className="z-10 p-3 pl-6 pr-6 mx-20 -mt-6 text-xl font-bold transition-colors duration-700 transform bg-white rounded-lg shadow-md md:mx-48 text-primary hover:bg-primary hover:text-white">
            Pilih Jagoanmu!
          </button>

          <div className="z-0 px-6 py-6 -mt-6 space-y-6 bg-white">
            <h1 className="pt-4 text-4xl font-semibold">Agenda</h1>
            <div className="space-y-2">
              <AgendaComp content="Ngapain Hayo" date="32 Feb" />
              <AgendaComp content="Ngapain Hayo" date="32 Feb" />
              <AgendaComp content="Ngapain Hayo" date="32 Feb" />
              <AgendaComp content="Ngapain Hayo" date="32 Feb" />
              <AgendaComp content="Ngapain Hayo" date="32 Feb" />
              <AgendaComp content="Ngapain Hayo" date="32 Feb" />
              <AgendaComp content="Ngapain Hayo" date="32 Feb" />
              <AgendaComp content="Ngapain Hayo" date="32 Feb" />
              <AgendaComp content="Ngapain Hayo" date="32 Feb" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
