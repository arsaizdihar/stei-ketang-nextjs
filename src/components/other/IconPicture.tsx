import Image from "next/image";
import React from "react";

const IconPicture: React.FC<{
  count?: number;
  idx?: number;
  name: string;
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
      <Image
        src={`${src ? src : "/avatar.jpg"}`}
        alt={name}
        width="93"
        height="93"
        className="z-10 rounded-full"
      />
      {/* <p className="z-10 text-base font-bold text-white max-w-full">{name}</p> */}
    </div>
  );
};

export default IconPicture;
