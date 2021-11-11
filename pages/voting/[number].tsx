import { Tab } from "@headlessui/react";
import { GetServerSideProps } from "next";
import DefaultErrorPage from "next/error";
import Image from "next/image";
import React, { useState } from "react";
import BackButton from "../../src/components/buttons/BackButton";
import Header from "../../src/components/main/CustomHead";
import Layout from "../../src/components/main/Layout";
import CandidateAbout from "../../src/components/other/Cabout";
import CandidateChoose from "../../src/components/other/CandidateChoose";
import CandidateSocmed from "../../src/components/other/CSocmed";
import NoLoginRedirect from "../../src/components/other/NoLoginRedirect";
import ProgressBar from "../../src/components/other/Progressbar";
import useCandidate from "../../src/hooks/useCandidate";
interface Props {
  number: string;
}
const CandidateDetail = ({ number }: Props) => {
  const { candidate, error } = useCandidate(number);
  const [choose, setChoose] = useState(false);
  if (error?.response?.status == 404)
    return <DefaultErrorPage statusCode={404} />;
  if (!candidate) return null;
  return (
    <>
      <NoLoginRedirect />
      <Header />
      {choose ? (
        <Layout>
          <header className="fixed z-30 w-full p-4 duration-300">
            <nav className="flex flex-row items-center justify-center align-middle">
              <div className="relative w-full max-w-screen-sm">
                <div className="absolute left-0 ml-2">
                  <BackButton onClick={() => setChoose(false)} />
                </div>
                <ProgressBar number={3} />
              </div>
            </nav>
          </header>

          <div className="flex flex-col items-center w-full px-4 pt-28 bg-gradient-to-b from-primary to-tertiary">
            <h2 className="flex flex-row justify-center w-full mb-4 text-4xl font-semibold text-white flex-shrink-0">
              Konfirmasi Pilihan
            </h2>

            <CandidateChoose name={candidate.name} src={candidate.photo} />
            <div className="flex flex-col justify-center flex-grow w-full max-w-screen-sm px-12 py-2 space-y-4 flex-shrink-0">
              <button className="p-3 text-lg font-bold text-center text-white transition-colors duration-700 transform rounded-lg shadow-md bg-primary hover:bg-gray-100 hover:text-primary">
                Konfirmasi
              </button>
              <button
                className="p-3 text-lg font-bold text-center transition-colors duration-700 transform bg-white rounded-lg shadow-md text-primary hover:bg-red-400 hover:text-white"
                onClick={() => setChoose(false)}
              >
                Batal
              </button>
            </div>
          </div>
        </Layout>
      ) : (
        <Layout>
          <header className="fixed z-30 w-full p-4 duration-300">
            <nav className="flex flex-row items-center justify-center align-middle">
              <div className="relative w-full max-w-screen-sm">
                <div className="absolute left-0 ml-2">
                  <BackButton link={"/voting"} />
                </div>
                <ProgressBar number={2} />
              </div>
            </nav>
          </header>

          <div className="relative flex flex-col items-center w-full min-h-full pt-20 bg-primary">
            <div className="z-20 flex flex-col mx-2 my-2 -mb-12 text-lg w-52 h-72">
              <div className="w-full h-full rounded-lg relative overflow-hidden">
                <Image
                  //   src="/avatar.jpg"
                  src={candidate?.photo}
                  alt={candidate.name}
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-full px-4 pt-16 bg-white rounded-t-xl">
              <h2 className="text-2xl font-semibold text-black">
                {candidate?.name}
              </h2>
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
                    <CandidateAbout bio={candidate.bio} />
                  </Tab.Panel>
                  <Tab.Panel>
                    <CandidateSocmed />
                  </Tab.Panel>
                  {/* ... */}
                </Tab.Panels>
              </Tab.Group>
            </div>
            <div className="fixed bottom-0 flex justify-center flex-grow w-full max-w-screen-sm px-12 py-2 bg-white">
              <button
                onClick={() => setChoose(true)}
                className="flex-grow p-3 text-lg font-bold text-center text-white transition-colors duration-700 transform rounded-lg shadow-md bg-primary hover:bg-gray-100 hover:text-primary"
              >
                Coblos
              </button>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { number } = context.query;
  return { props: { number } };
};
export default CandidateDetail;
