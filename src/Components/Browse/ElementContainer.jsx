import { faMobile, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Button1 from "../../UIElements/Buttons/Button1";

const ElementContainer = () => {
  return (
    <div>
      <div className="p-10 h-96 flex justify-center items-center border rounded-tl-lg rounded-tr-lg">
        <Button1 />
      </div>
      <div className="p-2 bg-slate-200 flex justify-between items-center rounded-br-lg rounded-bl-lg">
        <div>
          <Link to="https://github.com/chessrajat" target="_blank">
            <FontAwesomeIcon
              icon={faUser}
              className="mx-2 text-sm"
              title="Author"
            />{" "}
            Rajat Tyagi
          </Link>{" "}
          <p>
            <FontAwesomeIcon
              icon={faMobile}
              className="mx-2 text-sm"
              title="Responsive"
            />{" "}
            No
          </p>
        </div>
        <Link to="/browse/buttons/button1"
          className="py-1 px-3 border-2 border-violet-600 text-violet-700 rounded-md
                            hover:bg-violet-200"
        >
          Get Code
        </Link>
      </div>
    </div>
  );
};

export default ElementContainer;
