import React, { useEffect, useState } from "react";
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
    <div className="grid grid-cols-3 gap-4 pr-8 pt-8 pl-4">
      {featuredElements.map((element, i) => (
        <ElementContainer key={i} element={element} />
      ))}
    </div>
  );
};

export default Featured;
