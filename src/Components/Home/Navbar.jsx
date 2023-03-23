import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../../Utils/Hooks/useDarkMode";
import { BrightSun } from "../../Utils/Icons";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  const [theme, setTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(
    theme === "light" ? true : false
  );

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className="flex justify-between bg-white/75 backdrop-blur-md shadow-lg p-3 sticky top-0 z-20
                      dark:bg-slate-900/75"
    >
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={`${isDarkMode ? "/img/logo_light.svg" : "/img/logo.svg"}`} alt="logo" className="w-10" />
          <p className="font-semibold text-xl ml-2 hidden md:block dark:text-white">
            Tailwind <span className="text-violet-700 dark:text-violet-300">UIHUB</span>
          </p>
        </Link>
        <div className="ml-5 md:ml-10">
          <CustomNavLink to="/browse" title="Browse" />
        </div>
      </div>
      <div className="flex items-center">
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          className={`${
            isDarkMode ? "bg-slate-800" : "bg-yellow-200"
          } relative inline-flex h-8 w-16 items-center rounded-full mr-2 md:mr-4`}
        >
          <span className="sr-only">Enable DarkMode</span>
          <span
            className={`${
              isDarkMode
                ? "translate-x-9 bg-blue-500"
                : "translate-x-1 bg-yellow-600"
            } inline-block h-6 w-6 transform rounded-full transition`}
          >
            {isDarkMode ? (
              <FontAwesomeIcon icon={faMoon} className="text-white mt-1" />
            ) : (
              <BrightSun />
            )}
          </span>
        </Switch>
        <Link to="https://github.com/chessrajat/uihub" target="_blank">
          <button className="py-2 px-4 bg-violet-700 rounded-md text-cyan-50 hover:bg-violet-500">
            <FontAwesomeIcon icon={faGithub} />{" "}
            <span className="hidden md:inline-block">
              Contribute with Github
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
