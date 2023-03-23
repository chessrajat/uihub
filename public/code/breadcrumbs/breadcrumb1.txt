import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const breadcrumb1 = () => {
  return (
    <nav className="text-gray-700 text-sm font-semibold">
      <ul className="flex items-center">
        <li className="flex">
          <FontAwesomeIcon icon={faHome} className="p-0.5" />
          <p className="pl-3 pr-5">Home</p>
        </li>
        <li className="flex">
          <span className="ml-2 mr-2">/</span>
          <p className="px-3">Components</p>
        </li>
        <li className="flex">
          <span className="ml-2 mr-2">/</span>
          <p className="px-3">Breadcrumbs</p>
        </li>
      </ul>
    </nav>
  );
};

export default breadcrumb1;
