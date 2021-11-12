import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CandidateList: React.FC<{
  name: string;
  src?: string;
  number: number;
}> = ({ name, src, number }) => {
  return (
    <Link href={`/voting/${number}`} passHref>
      <Transition
        as="a"
        appear
        show
        enter="transform transition duration-800 ease-in-out"
        enterFrom="scale-0"
        enterTo="scale-100"
        className="flex flex-col mx-2 my-4 text-lg bg-white rounded-lg w-32 sm:w-44 h-44 sm:h-60 hover:scale-105 duration-300 odd:last:col-span-2"
      >
        <div className="w-full h-full bg-gray-400 rounded-t-lg relative overflow-hidden">
          <Image
            src={src ? src : "/avatar.jpg"}
            alt={name}
            layout="fill"
            className="object-cover"
          />
        </div>
        <h2 className="py-2 text-base font-semibold text-center ">{name}</h2>
      </Transition>
    </Link>
  );
};

export default CandidateList;
