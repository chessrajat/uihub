import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar1 = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full select-none">
      <div
        className="flex justify-between items-center w-full bg-gray-800 
                    rounded-tl-lg rounded-tr-lg px-12 py-3"
      >
        <div className="flex">
          <img src="/img/logo_light.svg" alt="Logo" className="w-10" />
          <div className="flex gap-4 mx-12">
            <button className="text-white bg-gray-900 p-2 rounded-md">
              Dashboard
            </button>
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md">
              Practice
            </button>
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md">
              About
            </button>
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md">
              Contact
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faBell}
            className="text-2xl text-gray-300 cursor-pointer"
          />
          <div className="relative">
            <img
              onClick={() => setShowMenu(!showMenu)}
              src="https://avatars.githubusercontent.com/chessrajat"
              alt="Profile"
              className="w-10 rounded-full cursor-pointer"
            />
            {showMenu && (
              <div className="w-48 bg-white shadow-lg rounded-md py-1 absolute right-1 top-12">
                <button className="w-full py-2 px-6 hover:bg-gray-200 text-left text-sm">
                  Profile
                </button>
                <button className="w-full py-2 px-6 hover:bg-gray-200 text-left text-sm">
                  Settings
                </button>
                <button className="w-full py-2 px-6 hover:bg-gray-200 text-left text-sm">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-40 border bg-gray-200"></div>
    </div>
  );
};

export default Navbar1;
