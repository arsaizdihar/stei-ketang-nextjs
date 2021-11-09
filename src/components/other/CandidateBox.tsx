import React from "react";
import IconPicture from "./IconPicture";

const CandidateBox: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center py-5 space-y-10">
        <p className="text-lg font-light tracking-wide text-white ">
          Berlangsung dari __/__/__ s.d. __/__/__
        </p>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden">
        <IconPicture name="lorem" />
        <IconPicture name="ipsum" />
        <IconPicture name="dolor" />
        <IconPicture name="amet" />
        <IconPicture name="hehe" />
        <IconPicture name="boah" />
      </div>
      <div className="flex flex-row justify-center">
        <button className="z-10 p-3 pl-6 pr-6 text-xl font-bold transition-colors duration-700 transform bg-white rounded-lg shadow-md text-primary hover:bg-primary hover:text-white">
          Pilih Ketua Sekarang!
        </button>
      </div>
    </div>
  );
};

export const CandidateChosen: React.FC = () => {
  return (
    <div>
      <h1 className="text-lg text-white">Kamu telah memilih: </h1>
      <div className="z-10 flex flex-row justify-center p-3 pl-6 pr-6">
        <IconPicture name="Nuha" />
      </div>
    </div>
  );
};

export default CandidateBox;
