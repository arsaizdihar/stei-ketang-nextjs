import {
    faInstagram,
    faLinkedinIn,
    faTwitter,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
  import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Link from "next/link";
  import React from "react";
  
  const Footer = () => {
    return (
    //   <footer>
    //     <div className="flex justify-center py-2 text-sm text-white bg-primary">
    //       <div className="container max-w-screen-md px-5 py-4">
    //         <div className="text-xs">
    //           <div>
    //             Customer service:{" "}
    //             <Link href="mailto:support@terjago.id">
    //               <a className="font-bold hover:underline">support@terjago.id</a>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="my-4 text-xs">
    //           <p>Info kerja sama</p>
    //           <p>
    //             Email kerja sama:{" "}
    //             <Link href="mailto:partnership@terjago.id">
    //               <a className="font-bold hover:underline">
    //                 partnership@terjago.id
    //               </a>
    //             </Link>
    //           </p>
    //           <p>
    //             Whatsapp:{" "}
    //             <Link href="https://wa.me/+628561788377">
    //               <a className="font-bold hover:underline">
    //                 +62-856-1788-377 (Chat Only)
    //               </a>
    //             </Link>
    //           </p>
    //         </div>
    //         {/* Social Media */}
    //         <div className="flex flex-wrap justify-center mt-2 space-x-4 text-xs md:mt-0">
    //           <SocmedLink
    //             name="Instagram"
    //             icon={faInstagram}
    //             className="text-red-400"
    //             href="https://instagram.com/terjago.id"
    //           />
    //           <SocmedLink
    //             name="Twitter"
    //             className="text-blue-400"
    //             icon={faTwitter}
    //             href="https://twittet.com/terjagoedu"
    //           />
    //           <SocmedLink
    //             name="YouTube"
    //             icon={faYoutube}
    //             className="text-red-600"
    //             href="https://www.youtube.com/channel/UCy_96_JxCjjsR35LCU8KMYw"
    //           />
    //           <SocmedLink
    //             name="LinkedIn"
    //             icon={faLinkedinIn}
    //             className="text-blue-400"
    //             href="https://www.linkedin.com/company/terjago-education/"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex justify-center text-xs text-white bg-primary">
    //       <a href="https://www.freepik.com/vectors/data">
    //         Data vector created by stories - www.freepik.com
    //       </a>
    //     </div>
    //     <div className="flex justify-center py-2 text-xs text-white bg-primary">
    //       ©{new Date().getFullYear()} by Terjago Education All Rights Reserved
    //     </div>
    //   </footer>
    <div className="flex justify-center py-6 text-sm text-white bg-primary">
        <div className="flex flex-col w-full px-4 text-white md:w-2/3">
            <div className="w-full font-extrabold font-primary text-7xl">
                <h1 className="w-full text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            </div>

            <div className="flex flex-col items-center mt-8 md:flex-row md:justify-between font-primary">
                <p className="w-full text-base text-center text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit apa aja bole</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row mt-16 mb-12 justify-evenly">
                    <div className="">
                        <h1 className="text-4xl font-bold font-title">STEI 2021</h1>
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
                <hr className="border-gray-400"/>
                <p className="w-full mt-12 text-sm font-normal text-center text-white font-primary">©{new Date().getFullYear()} by STEI 2021 ♥ All Rights Reserved</p>
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
        <FontAwesomeIcon icon={icon} className="inline-block w-4 h-4 duration-300 hover:h-6 hover:w-6" />
      </a>
    );
  };
  
  export default Footer;