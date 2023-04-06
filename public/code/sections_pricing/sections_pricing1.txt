import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sections_pricing1 = () => {
  return (
    <section className="bg-white w-full font-roboto">
      <div className="flex flex-col justify-center items-center my-16">
        <h3 className="font-medium my-2">Pricing</h3>
        <h2 className="text-3xl font-bold mb-6">Choose the right plan</h2>
        <div className="max-w-4xl flex mt-20">
          <div className="bg-white shadow-xl py-8 px-12 rounded-xl">
            <div className="flex flex-col items-center">
              <p className="text-2xl">Free Plan</p>
              <p className="text-6xl font-medium text-indigo-700 my-5">$0</p>
            </div>
            <ul className="mt-4 mb-6">
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-green-500 text-3xl"
                />{" "}
                <span className="ml-5 text-xl">5GB Disk Space</span>
              </li>
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-green-500 text-3xl"
                />{" "}
                <span className="ml-5 text-xl">100 Email Accounts</span>
              </li>
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-red-400 text-3xl"
                />{" "}
                <span className="ml-5 text-xl text-gray-400">
                  Unlimited Bandwidth
                </span>
              </li>
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-red-400 text-3xl"
                />{" "}
                <span className="ml-5 text-xl text-gray-400">
                  Write your text here
                </span>
              </li>
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-red-400 text-3xl"
                />{" "}
                <span className="ml-5 text-xl text-gray-400">
                  Unlimited Bandwidth
                </span>
              </li>
            </ul>
            <div className="flex justify-center">
              <button
                className="bg-blue-700 text-white py-2.5 px-7 rounded-full 
                                  shadow-lg shadow-blue-600/50"
              >
                Choose Plan
              </button>
            </div>
          </div>
          <div className="bg-[#3A42EF] relative overflow-hidden shadow-lg shadow-black/20 py-8 px-12 rounded-xl scale-125 ml-9">
            <div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-b from-[#388DF7] to-[#3B53F3]
                            -top-20 -right-32 rotate-12"
            ></div>
            <div className="flex flex-col items-center">
              <p className="text-2xl text-white z-10">Premium Plan</p>
              <p className="text-6xl font-medium text-white my-5 z-10">$9</p>
            </div>
            <ul className="mt-4 mb-6">
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-white text-3xl"
                />{" "}
                <span className="ml-5 text-xl text-gray-100 z-10">
                  5GB Disk Space
                </span>
              </li>
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-white text-3xl"
                />{" "}
                <span className="ml-5 text-xl text-gray-100 z-10">
                  100 Email Accounts
                </span>
              </li>
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-white text-3xl"
                />{" "}
                <span className="ml-5 text-xl text-gray-100 z-10">
                  Unlimited Bandwidth
                </span>
              </li>
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-white text-3xl"
                />{" "}
                <span className="ml-5 text-xl text-gray-100">
                  Write your text here
                </span>
              </li>
              <li className="my-3 flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-white text-3xl"
                />{" "}
                <span className="ml-5 text-xl text-gray-100">
                  Unlimited Bandwidth
                </span>
              </li>
            </ul>
            <div className="flex justify-center">
              <button
                className="bg-white text-blue-600 py-2.5 px-7 rounded-full 
                                  shadow-lg shadow-white/50"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#3A42EF] rounded-t-full h-32 -mt-80"></div>
      <div className="w-full bg-[#3A42EF] h-96"></div>
    </section>
  );
};

export default Sections_pricing1;
