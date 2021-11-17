import { Tab, Transition } from "@headlessui/react";
import { GetServerSideProps } from "next";
import DefaultErrorPage from "next/error";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { useQueryClient } from "react-query";
import BackButton from "../../src/components/buttons/BackButton";
import Header from "../../src/components/main/CustomHead";
import Layout from "../../src/components/main/Layout";
import AlreadyVoteRedirect from "../../src/components/other/AlreadyVoteRedirect";
import CandidateAbout from "../../src/components/other/Cabout";
import CandidateChoose from "../../src/components/other/CandidateChoose";
import CandidateSocmed from "../../src/components/other/CSocmed";
import NoLoginRedirect from "../../src/components/other/NoLoginRedirect";
import ProgressBar from "../../src/components/other/Progressbar";
import useCandidate from "../../src/hooks/useCandidate";
import { vote } from "../../src/utils/api";
import { isVotingDay } from "../../src/utils/isVotingDay";
interface Props {
  number: string;
}
const CandidateDetail = ({ number }: Props) => {
  const { data: candidate, error } = useCandidate(number);
  const queryClient = useQueryClient();

  const [choose, setChoose] = useState(false);
  const router = useRouter();

  const handleConfirm = () => {
    vote(number).then(() => {
      queryClient.refetchQueries("me");
      router.push("/voting/done");
    });
  };

  if (error?.response?.status == 404)
    return <DefaultErrorPage statusCode={404} />;
  if (!candidate) return null;
  return (
    <>
      <NoLoginRedirect />
      <AlreadyVoteRedirect />
      <Header title={candidate?.name} />
      <Layout>
        <header className="fixed z-30 w-full duration-300">
          <nav className="flex flex-row items-center justify-center align-middle">
            <div className="relative w-full max-w-lg bg-primary p-4">
              <div className="absolute left-0 ml-2">
                <BackButton
                  onClick={choose ? () => setChoose(false) : undefined}
                  link={choose ? undefined : "/voting"}
                />
              </div>
              <ProgressBar number={choose ? 3 : 2} />
            </div>
          </nav>
        </header>
        <Transition
          show={choose}
          as={Fragment}
          enter="transform transition duration-700 ease-in-out relative delay-300"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
        >
          <div className="flex flex-col items-center w-full px-4 pt-20 bg-gradient-to-b from-primary to-tertiary overflow-hidden">
            <h2 className="flex flex-row justify-center w-full mb-4 text-4xl font-semibold text-white flex-shrink-0">
              Konfirmasi Pilihan
            </h2>

            <CandidateChoose name={candidate.name} src={candidate.photo} />
            <div className="flex flex-col justify-center flex-grow w-full max-w-lg sm:px-12 py-2 space-y-4 flex-shrink-0">
              <button
                onClick={handleConfirm}
                className="p-3 text-lg font-bold text-center text-white transition-colors duration-700 transform rounded-lg shadow-md bg-primary hover:bg-gray-100 hover:text-primary"
              >
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
        </Transition>
        <Transition
          as={Fragment}
          show={!choose}
          appear
          enter="transform transition duration-700 ease-in-out relative delay-300"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
        >
          <div className="relative flex flex-col items-center w-full min-h-full pt-20 bg-primary">
            <div className="z-20 flex flex-col mx-2 my-2 -mb-12 text-lg w-52 h-64 flex-shrink-0">
              <div className="w-full h-full rounded-lg relative overflow-hidden">
                <Image
                  src={candidate.photo || "/avatar.jpg"}
                  alt={candidate.name}
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-full px-4 pt-16 pb-8 bg-white rounded-t-xl">
              <h2 className="text-2xl font-bold text-primary">
                {candidate?.name}
              </h2>
              <Tab.Group>
                <Tab.List className="flex flex-row items-center w-full py-4 justify-evenly">
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "text-primary font-bold flex flex-col items-center w-full border-b-[3.5px] border-primary transition duration-300 p-2"
                        : "bg-white text-black flex flex-col items-center w-full transition duration-300 p-2"
                    }
                  >
                    <p className="text-lg">TENTANG</p>
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `flex flex-col items-center w-full duration-300 p-2 border-b-[3.5px] bg-white ${
                        selected
                          ? "text-primary font-bold w-full border-primary"
                          : "text-black border-transparent"
                      }`
                    }
                  >
                    <p className="text-lg">SOSMED</p>
                  </Tab>

                  {/* ... */}
                </Tab.List>
                <Tab.Panels className="w-full">
                  <Tab.Panel>
                    <CandidateAbout {...candidate} />
                  </Tab.Panel>
                  <Tab.Panel>
                    <CandidateSocmed {...candidate} />
                  </Tab.Panel>
                  {/* ... */}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </Transition>
        {isVotingDay() && (
          <Transition
            as="div"
            appear
            show={!choose}
            enter="transform transition duration-500 ease-in-out delay-500"
            enterFrom="scale-0"
            enterTo="scale-100"
            className="fixed bottom-0 flex justify-center flex-grow w-full max-w-lg px-12 py-4"
          >
            <button
              onClick={() => setChoose(true)}
              className="flex-grow p-3 text-lg font-bold text-center text-white transition-colors duration-700 transform rounded-lg shadow-md bg-primary hover:bg-gray-100 hover:text-primary"
            >
              COBLOS
            </button>
          </Transition>
        )}
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { number } = context.query;
  return { props: { number } };
};
export default CandidateDetail;
