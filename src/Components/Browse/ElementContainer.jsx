import { faMobile, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ElementContainer = ({ element }) => {
  const isDarkImage = element.img_dark !== "";
  const isLightImage = element.img !== "";

  let classes = "";
  if (isLightImage && !isDarkImage) {
    classes += "bg-white";
  } else if (!isLightImage && isDarkImage) {
    classes += "bg-slate-900";
  } else if (isLightImage && isDarkImage) {
    classes += "bg-white dark:bg-slate-900";
  } else {
    console.log("No image");
  }
  return (
    <div>
      <div
        className={`p-2 h-80 flex flex-wrap justify-center items-center 
                      border rounded-tl-lg rounded-tr-lg
                      ${classes} dark:border-slate-600`}
      >
        {isLightImage && !isDarkImage && (
          <img
            src={element.img}
            alt={element.type}
            className="object-scale-down h-full w-full"
            draggable={false}
          />
        )}
        {!isLightImage && isDarkImage && (
          <img
            src={element.img_dark}
            alt={element.type}
            className="object-scale-down h-full w-full"
            draggable={false}
          />
        )}
        {isLightImage && isDarkImage && (
          <Fragment>
            <img
              src={element.img}
              alt={element.type}
              className="object-scale-down h-full w-full block dark:hidden"
              draggable={false}
            />
            <img
              src={element.img_dark}
              alt={element.type}
              className="object-scale-down h-full w-full hidden dark:block"
              draggable={false}
            />
          </Fragment>
        )}
      </div>
      <div
        className="p-2 bg-slate-200 dark:bg-slate-600 flex justify-between items-center rounded-br-lg rounded-bl-lg
                      border dark:border-slate-600"
      >
        <div>
          <Link
            to={element.profile_link}
            target="_blank"
            className="dark:text-gray-300"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="mx-2 text-sm"
              title="Author"
            />{" "}
            {element.author}
          </Link>{" "}
          <p>
            <FontAwesomeIcon
              icon={faMobile}
              className={`mx-2 text-sm ${
                element.responsive ? "text-green-400" : "text-red-400"
              } `}
              title={`${element.responsive ? "Responsive" : "Not Responsive"}`}
            />
          </p>
        </div>
        <Link
          to={`/browse/${element.element}`}
          className="py-1 px-3 border-2 border-violet-600 text-white rounded-md
                            hover:bg-violet-200 bg-violet-600 hover:text-violet-700"
        >
          Get Code
        </Link>
      </div>
    </div>
  );
};

export default ElementContainer;
