import {
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CandidateSocmed: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow w-full h-full space-y-6 text-primary">
      <SocmedLink
        name="@nuha"
        icon={faInstagram}
        href="https://www.instagram.com/stei21itb/"
      />
      <SocmedLink
        name="@nuha"
        icon={faTwitterSquare}
        href="https://twitter.com/stei21itb"
      />
      <SocmedLink
        name="@nuha"
        icon={faLinkedin}
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
      className={`flex flex-row align-middle items-center space-x-4 hover:bg-gray-200 duration-300 p-2 rounded group ${
        className || ""
      }`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} className="w-9 h-9 text-black mx-4" />
      <p className="text-lg text-primary">{name}</p>
    </a>
  );
};
