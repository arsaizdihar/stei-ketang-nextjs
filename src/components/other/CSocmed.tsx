import React from "react";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CandidateSocmed: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow w-full h-full space-y-6 text-primary">
      <SocmedLink
        name="@nuha"
        className="text-blue-400"
        icon={faTwitter}
        href="https://twitter.com/stei21itb"
      />
      <SocmedLink
        name="@nuha"
        className="text-black"
        icon={faInstagram}
        href="https://www.instagram.com/stei21itb/"
      />
      <SocmedLink
        name="@nuha"
        className="text-bluefa-rotate-27000"
        icon={faLinkedinIn}
        href="https://www.google.com"
      />
    </div>
  );
};

export default CandidateSocmed;

const SocmedLink: React.FC<{
  icon: IconDefinition;
  className?: string;
  href: string;
  name: string;
}> = ({ icon, className, href, name }) => {
  return (
    <a
      className={`flex flex-row align-middle items-center space-x-12 hover:bg-gray-200 duration-300 p-2 rounded group ${className}`}
      href={href}
    >
      <FontAwesomeIcon icon={icon} className="w-8 h-8" />
      <p className="text-sm text-primary">{name}</p>
    </a>
  );
};
