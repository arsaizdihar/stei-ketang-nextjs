import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-covers">
      <Navbar />
      <div className="flex justify-center w-full max-w-screen-sm min-h-screen cursor-default font-primary">
        {children}
      </div>
    </div>
  );
};

export default Layout;
