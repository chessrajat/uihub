import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const button5 = () => {
  return (
    <button className="px-4 py-1.5 text-blue-600 border-2 border-blue-600
                        transition hover:bg-blue-100">
      <FontAwesomeIcon icon={faPaperPlane} className="pr-3" /> Download
    </button>
  );
};

export default button5;
