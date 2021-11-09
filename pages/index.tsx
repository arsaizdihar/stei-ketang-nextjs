import type { NextPage } from "next";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import React from "react";
import Carousel from "../src/components/other/Carousel";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className="w-full">
          <div className="px-6 py-6 h-1/2 bg-gradient-to-b from-primary to-tertiary ">
            {/* Title */}
            <div className="flex justify-center px-10 py-10">
              <p className="text-4xl font-semibold leading-10 text-center text-white">
                Selamat datang di website pemilihan ketua angkatan STEI 2021!
              </p>
            </div>
            <div className="flex justify-center px-9">
              <button className="flex justify-center flex-grow p-3 pl-6 pr-6 text-xl font-bold text-center transition-colors duration-700 transform bg-white rounded-lg shadow-md md:mx-48 text-primary hover:bg-primary hover:text-white">
                Login
              </button>
            </div>
          </div>
          <div className="px-6 py-6 bg-white h-1/2 ">
            {/* Title */}
            <div className="flex flex-col justify-center">
              <p className="py-4 text-lg font-semibold text-left text-primary">
                Gallery
              </p>
              <div className="flex justify-center">
                {/* Gatau Cara bikin carousel */}
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
