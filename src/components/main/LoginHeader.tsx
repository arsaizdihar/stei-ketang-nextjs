import React from "react";
import BackButton from "../buttons/BackButton";

const LoginHeader: React.FC = () => {
  return (
    <header className="fixed z-30 w-full max-w-screen-sm mx-auto p-4 duration-300 ">
      <nav className="flex items-start justify-start">
        <BackButton link="/" />
      </nav>
    </header>
  );
};

export default LoginHeader;
