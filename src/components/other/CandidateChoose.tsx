import Image from "next/image";
import React from "react";

const CandidateChoose: React.FC<{
  name: string;
  src?: string;
}> = ({ name, src }) => {
  return (
    <div className="flex-grow flex flex-col items-center p-4 text-lg bg-white rounded-lg w-96 max-w-full ">
      <div className="rounded-lg flex-grow w-full h-80 relative overflow-hidden">
        <Image
          src={src ? src : "/avatar.jpg"}
          alt={name}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="p-2 space-y-2">
        <h2 className="text-2xl font-semibold text-center ">{name}</h2>
        <p className="text-sm text-center ">
          Setelah kamu menekan tombol ‘Konfirmasi’, kamu tidak akan bisa
          mengganti pilihanmu atau memilih orang lain lagi.
        </p>
      </div>
    </div>
  );
};

export default CandidateChoose;
