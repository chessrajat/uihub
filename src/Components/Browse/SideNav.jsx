import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SideNav = ({ categories }) => {
  return (
    <div className="px-5 py-8">
      <div className="relative flex items-center focus-within:text-violet-800 text-violet-700">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          autoComplete="off"
          className="w-full p-2 rounded-md mx-auto font-medium ring-none text-gray-900
                   bg-gray-100 border-2 border-violet-700 focus:bg-violet-100
                            focus:outline-violet-700 focus:outline-2"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-2 text-xl pointer-events-none"
        />
      </div>
      <div className="pt-8">
        <button
          className="w-full text-left px-5 py-2 my-1 bg-violet-200 rounded-md
                            font-semibold text-violet-800"
        >
          Featured
        </button>
        <div className="border my-2 border-slate-500"></div>
        {categories.map((category, i) => (
          <button
            key={i}
            className="w-full text-left px-5 py-2 my-1 rounded-md
                              font-semibold hover:bg-violet-200"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
