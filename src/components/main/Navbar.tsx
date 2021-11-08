import React from "react";
import {
  faHome,
  faNewspaper,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="fixed bottom-0 z-30 w-full max-w-screen-sm px-4 py-2 duration-300 bg-white border-t-2 shadow-sm border-primary">
      <nav className="container mx-auto">
        <div className="flex flex-row items-center justify-center space-x-12">
          <NavComp
            name="Home"
            className="bg-white text-primary"
            icon="home"
            href="/"
          />
          <NavComp
            name="Feeds"
            className="bg-white text-primary"
            icon="feeds"
            href="/feeds"
          />
          <NavComp
            name="Agenda"
            className="bg-white text-primary"
            icon="agenda"
            href="/agenda"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

const NavComp: React.FC<{
  icon: string;
  className?: string;
  href: string;
  name: string;
}> = ({ icon, className, href, name }) => {
  return (
    <Link href={href}>
      <a
        className={`block text-center hover:bg-gray-200 duration-300 p-2 rounded group ${className}`}
      >
        <Image src={`/icons/${icon}.svg`} alt="me" width="24" height="24" />
        <p className="text-sm tracking-tight font-primary">{name}</p>
      </a>
    </Link>
  );
};
