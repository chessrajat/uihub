import { faMobile, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Fallback from "./Fallback";

const ElementContainer = ({ element }) => {
  const Component = React.lazy(() =>
    import(`../../UIElements/${element.element}`)
  );
  return (
    <div>
      <div className="p-10 h-80 flex justify-center items-center border rounded-tl-lg rounded-tr-lg">
        <React.Suspense fallback={<Fallback />}>
          <Component />
        </React.Suspense>
      </div>
      <div className="p-2 bg-slate-200 flex justify-between items-center rounded-br-lg rounded-bl-lg">
        <div>
          <Link to={element.profile_link} target="_blank">
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
          to="/browse/buttons/button1"
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
