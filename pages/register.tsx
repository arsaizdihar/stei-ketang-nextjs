import type { NextPage } from "next";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import React from "react";
import LoginHeader from "../src/components/main/LoginHeader";

const Register: NextPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <LoginHeader />
        <div className="flex flex-col justify-center w-full bg-white">
          <div className="px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2 className="text-4xl font-bold text-center text-primary lg:text-left xl:text-5xl xl:text-bold">
              Ganti Password
            </h2>
            <div className="mt-12">
              <form>
                <div>
                  <input
                    className="w-full py-2 text-lg border-b border-gray-300 focus:outline-none focus:border-tertiary"
                    type=""
                    placeholder="Password Lama"
                  ></input>
                </div>
                <div className="mt-8">
                  <input
                    className="w-full py-2 text-lg border-b border-gray-300 focus:outline-none focus:border-tertiary"
                    type=""
                    placeholder="Password Baru"
                  ></input>
                </div>
                <div className="mt-8">
                  <input
                    className="w-full py-2 text-lg border-b border-gray-300 focus:outline-none focus:border-tertiary"
                    type=""
                    placeholder="Konfirmasi Password Baru"
                  ></input>
                </div>
                <div className="mt-10">
                  <button className="w-full p-4 text-lg font-semibold tracking-wide text-gray-100 duration-700 shadow-lg rounded-xl bg-primary font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600">
                    KONFIRMASI
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
