import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const Form_checkbox1 = () => {
  const [isChecked, setIsChecked] = useState(true);

  const beforeStyles = `before:content-[''] before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:blur-lg before:absolute before:z-0 before:top-0 before:right-0 before:bottom-0 before:left-0 before:transition-all before:duration-700 before:ease-in-out ${
    isChecked ? "before:scale-100" : "before:scale-0"
  }`;

  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-12 h-12 flex justify-center items-center relative text-2xl 
                            select-none rounded-full ${beforeStyles}`}
      >
        <div className="relative z-10 text-center">
          <input
            type="checkbox"
            checked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            className="appearance-none w-8 h-8 bg-black rounded-full cursor-pointer"
          />
          {isChecked && (
            <FontAwesomeIcon
              icon={faCheck}
              className="absolute top-1 left-1 text-white pointer-events-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form_checkbox1;
