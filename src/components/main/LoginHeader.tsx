import React from "react";
import Image from "next/image";

const LoginHeader: React.FC = () => {
  return (
    <header className="fixed z-30 w-full p-4 duration-300 ">
      <nav className="flex items-start justify-start">
        <div className="flex flex-col items-center justify-center p-2 align-middle bg-white rounded-full shadow-lg">
          <Image
            src={"/icons/arrow.svg"}
            alt="me"
            width="26"
            height="26"
            className="rounded-full"
          />
        </div>
      </nav>
    </header>
  );
};

export default LoginHeader;
