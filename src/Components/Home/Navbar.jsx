import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white/75 backdrop-blur-md shadow-lg p-3 sticky top-0">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/img/logo.svg" alt="logo" className="w-10" />
          <p className="font-semibold text-xl ml-2">
            Tailwind <span className="text-violet-700">UIHUB</span>
          </p>
        </Link>
        <div className="ml-10">
          <Link to="/browse" className="font-semibold hover:text-violet-700">
            Browse
          </Link>
        </div>
      </div>
      <div>
        <Link to="https://github.com/chessrajat/uihub" target="_blank">
          <button className="py-2 px-4 bg-violet-500 rounded-md text-cyan-50 hover:bg-violet-700">
            <FontAwesomeIcon icon={faGithub} /> Contribute with Github
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
