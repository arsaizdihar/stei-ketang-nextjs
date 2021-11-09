import React from "react";
import Image from "next/image";

const TopMenu: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <Image src="/icons/settings.svg" alt="me" width="30" height="30" />
      <p className="text-xl text-white">
        Halo, <span className="font-semibold">Nama</span>!
      </p>
    </div>
  );
};

export default TopMenu;
