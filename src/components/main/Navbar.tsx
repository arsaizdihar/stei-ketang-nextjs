import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar: React.FC = () => {
  const CheckPage = () => {
    const router = useRouter();
    const hiddens = ["/", "/password", "/login"];
    return (
      hiddens.includes(router.pathname) || router.pathname.startsWith("/voting")
    );
  };

  const CheckDashboard = () => {
    const router = useRouter();
    let active = "";
    if (router.pathname === "/dashboard") {
      return (active = "bg-gray-400");
    } else {
      return (active = "bg-white");
    }
  };
  const CheckFeeds = () => {
    const router = useRouter();
    let active = "";
    if (router.pathname === "/feeds") {
      return (active = "bg-gray-400");
    } else {
      return (active = "bg-white");
    }
  };
  const CheckAgenda = () => {
    const router = useRouter();
    let active = "";
    if (router.pathname === "/agenda") {
      return (active = "bg-gray-400");
    } else {
      return (active = "bg-white");
    }
  };

  if (CheckPage()) return null;

  return (
    <footer
      className={`fixed bottom-0 z-30 w-full max-w-screen-sm px-4 py-2 duration-300 bg-white border-t-2 shadow-sm border-primary`}
    >
      <nav className="container mx-auto">
        <div className="flex flex-row items-center space-x-10 justify-evenly">
          <NavComp
            name="Home"
            className={`${CheckDashboard()} text-primary`}
            icon="home"
            href="/dashboard"
          />
          <NavComp
            name="Feeds"
            className={`${CheckFeeds()} text-primary`}
            icon="feeds"
            href="/feeds"
          />
          <NavComp
            name="Agenda"
            className={`${CheckAgenda()} text-primary`}
            icon="agenda"
            href="/agenda"
          />
        </div>
      </nav>
    </footer>
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
        <Image
          src={`/icons/${icon}.svg`}
          alt="me"
          width="26"
          height="26"
          className="rounded"
        />
        {/* <p className="text-sm tracking-tight font-primary">{name}</p> */}
      </a>
    </Link>
  );
};
