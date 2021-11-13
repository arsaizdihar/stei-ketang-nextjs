import {
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Candidate } from "../../ts/types";

const CandidateSocmed: React.FC<Candidate | undefined> = ({
  instagram,
  twitter,
  linkedin,
  name,
}) => {
  return (
    <div className="flex flex-col flex-grow w-full h-full space-y-4 text-primary">
      {instagram && (
        <SocmedLink
          name={"@" + instagram}
          icon={faInstagram}
          href={`https://www.instagram.com/${instagram}/`}
        />
      )}
      {twitter && (
        <SocmedLink
          name={"@" + twitter}
          icon={faTwitterSquare}
          href={"https://twitter.com/" + twitter}
        />
      )}
      {linkedin && (
        <SocmedLink
          name={name}
          icon={faLinkedin}
          href={"https://www.linkedin.com/in/" + linkedin}
        />
      )}
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
      className={`flex flex-row align-middle items-center hover:bg-gray-200 duration-300 p-2 rounded group ${
        className || ""
      }`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-black mx-4 block p-0"
        width="2.25rem"
        height="2.25rem"
      />
      <p className="text-lg text-primary">{name}</p>
    </a>
  );
};
