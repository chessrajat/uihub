import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const button7 = () => {
  return (
    <button className="text-white text-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 
                        flex p-4 rounded-full">
      <FontAwesomeIcon icon={faPaperPlane} className="mr-0.5" />
    </button>
  );
};

export default button7;
