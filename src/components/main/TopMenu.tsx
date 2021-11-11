import React from "react";
import useMe from "../../hooks/useMe";
import Settings from "../other/Settings";

const TopMenu: React.FC = () => {
  const { user } = useMe();
  return (
    <div className="flex flex-row justify-between">
      <Settings />

      {user && (
        <p className="text-xl text-white">
          Halo, <span className="font-semibold">{user.full_name}</span>!
        </p>
      )}
    </div>
  );
};

export default TopMenu;
