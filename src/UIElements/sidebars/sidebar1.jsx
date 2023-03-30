import { faPiedPiper } from "@fortawesome/free-brands-svg-icons";
import {
  faBookmark,
  faCalendar,
  faClipboard,
  faComment,
  faEnvelope,
  faFolder,
} from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sidebar1 = () => {
  return (
    <aside
      className="min-h-screen bg-[#062335] dark:bg-white rounded-xl flex flex-col justify-between
                        m-4 w-16"
    >
      <nav>
        <FontAwesomeIcon
          icon={faPiedPiper}
          className="self-center text-green-500 text-3xl p-4 mb-1"
        />

        <div className="flex flex-col justify-center">
          <button className="text-green-500 border-r-2 border-green-500 my-3 py-1">
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button
            className="text-gray-100 border-r-2 border-transparent hover:border-green-500 
                                hover:text-green-500 my-3 py-1 dark:text-gray-800 dark:hover:text-green-500"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <button
            className="text-gray-100 border-r-2 border-transparent hover:border-green-500 
                                hover:text-green-500 my-3 py-1 dark:text-gray-800 dark:hover:text-green-500"
          >
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button
            className="text-gray-100 border-r-2 border-transparent hover:border-green-500 
                                hover:text-green-500 my-3 py-1 dark:text-gray-800 dark:hover:text-green-500"
          >
            <FontAwesomeIcon icon={faClipboard} />
          </button>
          <button
            className="text-gray-100 border-r-2 border-transparent hover:border-green-500 
                                hover:text-green-500 my-3 py-1 dark:text-gray-800 dark:hover:text-green-500"
          >
            <FontAwesomeIcon icon={faCalendar} />
          </button>
          <button
            className="text-gray-100 border-r-2 border-transparent hover:border-green-500 
                                hover:text-green-500 my-3 py-1 dark:text-gray-800 dark:hover:text-green-500"
          >
            <FontAwesomeIcon icon={faFolder} />
          </button>
          <button
            className="text-gray-100 border-r-2 border-transparent hover:border-green-500 
                                hover:text-green-500 my-3 py-1 dark:text-gray-800 dark:hover:text-green-500"
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </nav>
      <div className="p-3">
        <img
          class="inline-block w-10 h-10 rounded-full cursor-pointer"
          src="https://avatars.githubusercontent.com/jerryjliu"
          alt="jerryjliu"
          draggable={false}
        />
      </div>
    </aside>
  );
};

export default Sidebar1;
