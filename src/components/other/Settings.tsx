import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import useLogout from "../../hooks/useLogout";

const Settings = () => {
  const logout = useLogout();
  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <Image src="/icons/settings.svg" alt="me" width="30" height="30" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-primary text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2`}
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="w-5" />
                  <span className="">Logout</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Settings;
