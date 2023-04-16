import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination2 = () => {
  return (
    <div className="m-2 border rounded-md shadow-lg bg-white w-full">
      <div className="h-56 bg-gray-100 border-b"></div>
      <div className="px-4 py-3 flex justify-between items-center sm:hidden">
        <button className="border border-gray-400 rounded-lg px-4 py-1.5 text-gray-700">
          Previous
        </button>
        <button className="border border-gray-400 rounded-lg px-4 py-1.5 text-gray-700">
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between px-4 py-3">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">100</span> results
          </p>
        </div>
        <div>
          <nav className="flex items-center border border-gray-300 rounded-md shadow-sm divide-x divide-gray-300">
            <a
              href="#/"
              className="p-2 text-gray-400 inline-flex items-center hover:bg-gray-50"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="h-5 w-5" />
            </a>
            <a
              href="#/"
              className="px-4 py-2 text-sm font-semibold inline-flex 
                                        items-center bg-indigo-600 text-white"
            >
              1
            </a>
            <a
              href="#/"
              className="px-4 py-2 text-gray-900 text-sm font-semibold inline-flex 
                                        items-center hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#/"
              className="hidden md:inline-flex px-4 py-2 text-gray-900 text-sm font-semibold 
                                        items-center hover:bg-gray-50"
            >
              3
            </a>
            <span
              className="px-4 py-2 text-gray-900 text-sm font-semibold inline-flex 
                                        items-center"
            >
              ...
            </span>
            <a
              href="#/"
              className="hidden md:inline-flex px-4 py-2 text-gray-900 text-sm font-semibold 
                                        items-center hover:bg-gray-50"
            >
              8
            </a>
            <a
              href="#/"
              className="px-4 py-2 text-gray-900 text-sm font-semibold inline-flex 
                                        items-center hover:bg-gray-50"
            >
              9
            </a>
            <a
              href="#/"
              className="px-4 py-2 text-gray-900 text-sm font-semibold inline-flex 
                                        items-center hover:bg-gray-50"
            >
              10
            </a>
            <a
              href="#/"
              className="p-2 text-gray-400 inline-flex items-center hover:bg-gray-50"
            >
              <FontAwesomeIcon icon={faAngleRight} className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination2;
