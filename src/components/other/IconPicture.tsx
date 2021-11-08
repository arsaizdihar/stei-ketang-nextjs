import React from "react";
import Image from "next/image";

const IconPicture: React.FC<{
  name: string;
}> = ({ name }) => {
  return (
    <div className="w-1/3 px-6 my-6 overflow-hidden text-center duration-300 hover:scale-125 ">
      <Image
        src="/avatar.jpg"
        alt="me"
        width="72"
        height="72"
        className="rounded-full "
      />
    </div>
  );
};

export default IconPicture;
