import React from "react";

const pagination1 = () => {
  return (
    <ul
      className="flex border rounded-md divide-x items-center
                    dark:border-gray-600 dark:divide-gray-600">
      <button
        className="px-3 py-1.5 hover:bg-gray-100 
                        dark:text-gray-200 dark:hover:bg-gray-800">
        Previous
      </button>
      <li
        className="px-4 py-1.5 cursor-pointer bg-gray-600 text-white 
                    dark:bg-gray-100 dark:text-gray-800">
        1
      </li>
      <li
        className="px-4 py-1.5 cursor-pointer hover:bg-gray-100 
                    dark:text-gray-200 dark:hover:bg-gray-800">
        2
      </li>
      <li
        className="px-4 py-1.5 cursor-pointer hover:bg-gray-100
                    dark:text-gray-200 dark:hover:bg-gray-800">
        3
      </li>
      <button
        className="px-3 py-1.5 hover:bg-gray-100
                        dark:text-gray-200 dark:hover:bg-gray-800">
        Next
      </button>
    </ul>
  );
};

export default pagination1;
