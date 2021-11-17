import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import useMe from "../src/hooks/useMe";

const Home: NextPage = () => {
  const { user } = useMe();
  const router = useRouter();
  if (user) router.push("/dashboard");
  return (
    <>
      <Header />
      <Layout>
        <div className="w-full">
          <div className="px-6 py-6 bg-gradient-to-b from-primary to-tertiary flex flex-col justify-center h-full">
            {/* Title */}
            <div className="flex justify-center px-8 py-10">
              <p className="text-3xl sm:text-4xl font-semibold leading-10 text-center text-white">
                Selamat datang di website pemilihan ketua angkatan STEI 2021!
              </p>
            </div>
            <div className="flex justify-center px-9">
              <Link href="/login">
                <a className="flex justify-center flex-grow p-3 pl-6 pr-6 text-xl font-bold text-center transition-colors duration-700 transform bg-white rounded-lg shadow-md md:mx-48 text-primary hover:bg-primary hover:text-white">
                  Login
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="px-6 py-6 bg-white h-1/2 ">
            <div className="flex flex-col justify-center">
              <p className="py-4 text-lg font-semibold text-left text-primary">
                Gallery
              </p>
              <div className="flex justify-center"></div>
            </div>
          </div> */}
        </div>
      </Layout>
    </>
  );
};

export default Home;
