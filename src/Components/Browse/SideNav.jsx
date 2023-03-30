import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ categories, component, search }) => {
  const activeClasses = "text-violet-800 bg-violet-200";
  return (
    <div className="px-5 py-8">
      <div className="relative flex items-center focus-within:text-violet-800 text-violet-700">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={search}
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
        <Link to="/browse">
          <button
            className={`w-full text-left px-5 py-2 my-1 rounded-md
                            font-semibold hover:bg-violet-200 
                            dark:hover:bg-violet-700 dark:hover:text-white ${
                              component === ""
                                ? activeClasses
                                : "dark:text-white"
                            }`}
          >
            Featured
          </button>
        </Link>
        <div className="border my-2 border-slate-500"></div>
        {categories.map((category, i) => (
          <Link key={i} to={`/browse/${category.id}`}>
            <button
              className={`w-full text-left px-5 py-2 my-1 rounded-md
                              font-semibold hover:bg-violet-200
                              dark:hover:bg-violet-700 dark:hover:text-white  ${
                                category.id === component
                                  ? activeClasses
                                  : "dark:text-white"
                              }`}
            >
              {category.text}
            </button>
          </Link>
        ))}
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default SideNav;
