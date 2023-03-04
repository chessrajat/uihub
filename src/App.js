import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl text-blue-600 font-bold underline">Hello world!</h1>
      <FontAwesomeIcon icon={faHome} />
    </div>
  );
};

export default App;
