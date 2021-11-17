import React from "react";
import Countdown from "react-countdown";
import { votingDate } from "../../constants/votingDate";
import { numToDigits } from "../../utils/numToDigits";

const VoteCountdown = () => {
  return (
    <Countdown
      date={votingDate}
      renderer={({ completed, days, hours, minutes, seconds }) => {
        if (completed) {
          return (
            <div className="px-6 py-5 align-middle border-2 rounded-md border-[#CD787D] bg-[#A67A7A] bg-opacity-60 text-center text-white">
              <p className="font-extrabold text-4xl">Hari ini!</p>
              <p className="text-lg">Pemilihan ketua angkatan</p>
            </div>
          );
        }
        return (
          <div className="px-6 py-2 align-middle border-2 rounded-md border-fiftiary bg-quartiary text-white grid justify-items-center">
            <div className="flex space-x-2">
              <div className="text-center">
                <p className="font-extrabold text-4xl">{numToDigits(days)}</p>
                <p className="text-sm">hari</p>
              </div>
              <span className="font-extrabold text-3xl">:</span>
              <div className="text-center">
                <p className="font-extrabold text-4xl">{numToDigits(hours)}</p>
                <p className="text-sm">jam</p>
              </div>
              <span className="font-extrabold text-3xl">:</span>
              <div className="text-center">
                <p className="font-extrabold text-4xl">
                  {numToDigits(minutes)}
                </p>
                <p className="text-sm">menit</p>
              </div>
              <span className="font-extrabold text-3xl">:</span>
              <div className="text-center">
                <p className="font-extrabold text-4xl">
                  {numToDigits(seconds)}
                </p>
                <p className="text-sm">detik</p>
              </div>
            </div>
            <div className="text-center my-1">
              <p>menuju hari pemilihan</p>
            </div>
          </div>
        );
      }}
    />
  );
};

export default VoteCountdown;
