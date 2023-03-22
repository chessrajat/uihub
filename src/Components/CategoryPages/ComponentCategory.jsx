import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ElementContainer from "../Browse/ElementContainer";

const ComponentCategory = ({ component }) => {
  const [componentElements, setComponentElements] = useState([]);

  useEffect(() => {
    fetch(`/data/components/${component}.json`)
      .then((response) => response.json())
      .then((data) => {
        setComponentElements(data);
      });
  }, [component]);

  return (
    <section className="px-4">
      <div className="px-4">
        <h1 className="text-4xl font-bold py-3 capitalize">{component}</h1>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">
            <Link
              to="https://github.com/chessrajat/uihub/issues/new"
              target="_blank"
            >
              Issues? Give us feedback <FontAwesomeIcon icon={faRightLong} />
            </Link>{" "}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pr-8 pt-8 pl-4">
        {componentElements.map((element, i) => (
          <ElementContainer key={i} element={element} />
        ))}
      </div>
    </section>
  );
};

export default ComponentCategory;
