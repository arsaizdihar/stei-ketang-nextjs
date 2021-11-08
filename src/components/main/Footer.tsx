import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center w-full max-w-screen-md py-6 text-sm text-white bg-primary">
      <div className="flex flex-col w-full px-4 text-white md:w-2/3">
        <div className="w-full text-2xl font-extrabold font-primary md:text-3xl">
          <h1 className="w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
        </div>

        <div className="flex flex-col items-center mt-8 md:flex-row md:justify-between font-primary">
          <p className="w-full text-base text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit apa aja bole
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row mt-16 mb-12 justify-evenly">
            <div className="">
              <h1 className="text-2xl font-bold tracking-wide md:text-4xl font-title">
                STEI 2021
              </h1>
            </div>

            <div className="flex flex-row items-center justify-between space-x-8">
              <SocmedLink
                name="Twitter"
                className="text-blue-400 bg-primary"
                icon={faTwitter}
                href="https://twitter.com/stei21itb"
              />
              <SocmedLink
                name="Instagram"
                className="text-blue-400"
                icon={faInstagram}
                href="https://www.instagram.com/stei21itb/"
              />
              <SocmedLink
                name="Linkedin"
                className="text-blue-400"
                icon={faLinkedinIn}
                href="https://www.google.com"
              />
            </div>
          </div>
          <hr className="border-gray-400" />
          <p className="w-full mt-12 text-base font-normal tracking-wide text-center text-white font-primary">
            ©{new Date().getFullYear()} by STEI 2021 ♥ All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

const SocmedLink: React.FC<{
  icon: IconDefinition;
  className?: string;
  href: string;
  name: string;
}> = ({ icon, className, href, name }) => {
  return (
    <a
      className={`block shadow hover:bg-gray-200 duration-300 p-2 rounded group ${className}`}
      href={href}
    >
      <FontAwesomeIcon icon={icon} className="inline-block w-4 h-4" />
    </a>
  );
};

export default Footer;
