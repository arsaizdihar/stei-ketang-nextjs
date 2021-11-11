import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const BackButton: React.FC<{
  link?: string;
  onClick?: React.MouseEventHandler;
}> = ({ link, onClick }) => {
  const router = useRouter();
  return (
    <button
      onClick={onClick || (() => (link ? router.push(link) : router.back()))}
      className="flex flex-col items-center justify-center w-10 h-10 p-2 align-middle bg-white rounded-full shadow-lg hover:bg-gray-200 duration-300"
    >
      <Image
        src={"/icons/arrow.svg"}
        alt="me"
        width="26"
        height="26"
        className="rounded-full"
      />
    </button>
  );
};

export default BackButton;
