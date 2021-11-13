import Image from "next/image";
import React from "react";

const IconPicture: React.FC<{
  count?: number;
  idx?: number;
  name?: string;
  src?: string;
}> = ({ name, src, count, idx }) => {
  let colSpan = "col-span-2";
  if (count && idx) {
    if (count % 3 === 2 && idx > count - 3) {
      colSpan = "col-span-3";
    } else if (count % 3 === 1 && idx === count - 1) {
      colSpan = "col-span-6";
    }
  }
  return (
    <div
      className={`z-10 px-2 my-2 text-center duration-300 hover:scale-125 ${colSpan}`}
    >
      <div className="relative w-24 h-24 mx-auto">
        <Image
          src={`${src ? src : "/avatar.jpg"}`}
          alt={name}
          layout="fill"
          className="z-10 rounded-full"
        />
      </div>
      {name && (
        <p className="z-10 text-base font-bold text-white max-w-full">{name}</p>
      )}
    </div>
  );
};

export default IconPicture;
