import {
  faAppStoreIos,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sections_footer1 = () => {
  return (
    <footer className="w-full">
      <section className="bg-white px-4 py-12 shadow-sm">
        <div className="max-w-7xl flex flex-row mx-auto">
          <div className="basis-3/4">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-gray-600">Products</h4>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Coats
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Dresses
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Hoodies & Sweatshirts
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Infant & Toddlers Clothing
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-gray-600">Information</h4>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  About Us
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  FAQ
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Help
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Shipping & Return
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-gray-600">Products</h4>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Coats
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Dresses
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Hoodies & Sweatshirts
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Infant & Toddlers Clothing
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-gray-600">Socials</h4>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Instagram
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Twitter
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Facebook
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray-500 hover:text-gray-700"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <h3 className="text-lg font-bold text-gray-600 tracking-wide">
              SUBSCRIBE
            </h3>
            <div className="relative flex items-center my-2">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="border-2 border-gray-400 outline-none w-full rounded-md p-3.5 text-lg"
              />
              <div
                className="bg-gray-600 w-12 h-12 flex items-center justify-center rounded-md
                                absolute right-2 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-white text-3xl"
                />
              </div>
            </div>
            <p className="text-gray-500">
              We'll never share your email address with a third-party.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="max-w-7xl flex justify-between mx-auto py-5">
          <div className="flex items-center gap-5">
            <p className="text-xl text-gray-700">
              Email: contact@yourdomain.com
            </p>
            <div className="h-full w-0.5 bg-gray-300"></div>
            <p className="text-xl text-gray-700">Phone: +0000000000</p>
          </div>
          <div className="flex gap-4">
            <button className="relative flex items-center bg-black rounded-md px-5 py-2 gap-4">
              <FontAwesomeIcon
                icon={faAppStoreIos}
                className="text-white text-5xl"
              />
              <p className="text-gray-300 text-left leading-3">
                Download on the <br></br>
                <span className="text-2xl">App Store</span>
              </p>
            </button>
            <button className="relative flex items-center bg-black rounded-md px-5 py-2 gap-4">
              <FontAwesomeIcon
                icon={faGooglePlay}
                className="text-white text-4xl"
              />
              <p className="text-gray-300 text-left leading-3">
                GET IT ON <br></br>
                <span className="text-2xl">Google Play</span>
              </p>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white flex justify-center">
        <p className="max-w-7xl text-gray-400 py-5">
          Copyright &copy; {new Date().getFullYear()} Website Name - All Right
          Reserved
        </p>
      </section>
    </footer>
  );
};

export default Sections_footer1;
