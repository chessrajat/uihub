import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ElementContainer from "../Browse/ElementContainer";

const Featured = () => {
  const [featuredElements, setFeaturedElements] = useState([]);
  useEffect(() => {
    fetch("/data/featured.json")
      .then((response) => response.json())
      .then((data) => {
        setFeaturedElements(data);
      });
  }, []);
  return (
    <div className="px-8">
      <h1 className="text-4xl font-bold py-3 dark:text-white">Introduction</h1>
      <p className="leading-relaxed text-gray-700 dark:text-gray-400">
        UIHub is a website that offers a wide range of pre-built UI components
        to help you create stunning websites in no time. With UIHub, you no
        longer have to start from scratch or spend countless hours designing and
        developing your own components. Our library is packed with a variety of
        customizable and reusable elements that can be easily integrated into
        your project, saving you time and effort.
      </p>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-300">
          <Link
            to="https://github.com/chessrajat/uihub/issues/new"
            target="_blank"
          >
            Issues? Give us feedback <FontAwesomeIcon icon={faRightLong} />
          </Link>{" "}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
        {featuredElements.map((element, i) => (
          <ElementContainer key={i} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
