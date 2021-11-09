import React from "react";

const CandidateChoose: React.FC<{
  name: string;
}> = ({ name }) => {
  return (
    <div className="flex flex-col items-center pt-4 text-lg bg-white rounded-lg w-72 ">
      <div className="bg-gray-400 rounded-lg h-72 w-60"></div>
      <div className="p-2 space-y-2">
        <h2 className="text-xl font-semibold text-center ">{name}</h2>
        <p className="text-sm text-center ">
          Setelah kamu menekan tombol ‘Konfirmasi’, kamu tidak akan bisa
          mengganti pilihanmu atau memilih orang lain lagi.
        </p>
      </div>
    </div>
  );
};

export default CandidateChoose;
