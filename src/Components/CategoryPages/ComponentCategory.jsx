import React, { useEffect, useState } from "react";
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
    <div className="grid grid-cols-3 gap-4 pr-8 pt-8 pl-4">
      {componentElements.map((element, i) => (
        <ElementContainer key={i} element={element} />
      ))}
    </div>
  );
};

export default ComponentCategory;
