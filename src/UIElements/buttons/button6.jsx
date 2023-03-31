import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const button6 = () => {
  return (
    <button className="bg-blue-600 text-white flex items-center">
      <FontAwesomeIcon icon={faPaperPlane} className="p-3 bg-blue-700" />{" "}
      <p className="px-2">Download</p>
    </button>
  );
};

export default button6;
