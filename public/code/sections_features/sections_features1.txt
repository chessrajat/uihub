import {
  faArrowUpFromBracket,
  faSquareCheck,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sections_features1 = () => {
  return (
    <section className="bg-white w-full max-w-6xl mx-auto px-12 py-20 font-poppins">
      <p className="font-medium text-amber-500 text-lg">Best Features</p>
      <h2 className="text-blue-950 font-extrabold text-5xl my-4">
        Our Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-950 rounded-xl p-9 relative mt-16">
          <h4 className="text-white font-medium text-xl mt-8 mb-4">
            Bill Payment
          </h4>
          <p className="text-sm text-gray-400">
            Make bill payments easily using the wallet android application.
            Paying bills is easier using the application with guaranteed
            security.
          </p>
          <div
            className="p-4 rounded-full bg-sky-400 w-20 h-20 absolute -top-10 shadow-md 
                            flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              className="text-3xl text-white"
            />
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl p-9 relative mt-16">
          <h4 className="text-blue-950 font-medium text-xl mt-8 mb-4">
            Withdraw Money
          </h4>
          <p className="text-sm text-gray-600">
            Withdraw Money easily using the wallet android application. Paying
            bills is easier using the application with guaranteed security.
          </p>
          <div
            className="p-4 rounded-full bg-blue-950 w-20 h-20 absolute -top-10 shadow-md 
                            flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faSquareCheck}
              className="text-3xl text-sky-400"
            />
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl p-9 relative mt-16">
          <h4 className="text-blue-950 font-medium text-xl mt-8 mb-4">
            Add Card
          </h4>
          <p className="text-sm text-gray-600">
            Add your Credit Cards easily using the wallet android application.
            Paying bills is easier using the application with guaranteed
            security.
          </p>
          <div
            className="p-4 rounded-full bg-blue-950 w-20 h-20 absolute -top-10 shadow-md 
                            flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faSquarePlus}
              className="text-3xl text-sky-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections_features1;
