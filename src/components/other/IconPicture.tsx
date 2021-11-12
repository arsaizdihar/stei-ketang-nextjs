import Image from "next/image";
import React from "react";

const IconPicture: React.FC<{
  name: string;
  src?: string;
}> = ({ name, src }) => {
  return (
    <div className="z-10 px-6 my-6 overflow-hidden text-center duration-300 hover:scale-125 odd:last:col-span-2 sm:odd:last:col-span-1">
      <Image
        src={`${src ? src : "/avatar.jpg"}`}
        alt="me"
        width="72"
        height="72"
        className="z-10 rounded-full"
      />
      <p className="z-10 text-base font-bold text-white max-w-full">{name}</p>
    </div>
  );
};

export default IconPicture;
