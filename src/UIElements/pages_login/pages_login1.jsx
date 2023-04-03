import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleUser,
  faEye,
  faEyeSlash,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Pages_login1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="bg-white max-w-6xl mx-auto mt-16 drop-shadow-lg select-none">
      <div className="grid grid-cols-2">
        <div className="py-16 px-28">
          <form>
            <div className="border-2 flex rounded-lg my-4">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="p-3.5 border-r-2 text-2xl text-gray-400"
              />
              <input
                type="text"
                name="username"
                placeholder="Username or Email"
                className="bg-transparent w-full p-3.5 outline-none text-gray-600"
              />
            </div>
            <div className="border-2 flex rounded-lg my-5 relative">
              <FontAwesomeIcon
                icon={faKey}
                className="p-3.5 border-r-2 text-2xl text-gray-400"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="bg-transparent w-full p-3.5 pr-10 outline-none text-gray-600"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="absolute right-3 top-4 text-gray-400 cursor-pointer text-xl"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className="mt-10 mb-6 flex justify-between items-center">
              <div className="flex gap-2">
                <input type="checkbox" className="w-6 h-6" />
                <span className="text-gray-400">Remember me</span>
              </div>

              <input
                type="submit"
                value="LOGIN"
                onClick={(e) => e.preventDefault()}
                className="bg-blue-500 text-white px-6 py-2.5 rounded-lg text-lg cursor-pointer"
              />
            </div>
            <div className="flex justify-between">
              <a href="#/" className="text-sky-500">
                Register Now
              </a>
              <a href="#/" className="text-gray-400">
                Forget Password?
              </a>
            </div>
          </form>
          <div className="relative flex py-10 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex flex-col">
            <button className="bg-blue-900 text-white flex items-center rounded-lg my-2">
              <FontAwesomeIcon
                icon={faFacebook}
                className="p-3 bg-blue-950 text-2xl rounded-l-lg"
              />{" "}
              <p className="px-2 mx-auto">LOGIN WITH FACEBOOK</p>
            </button>
            <button className="bg-sky-500 text-white flex items-center rounded-lg my-2">
              <FontAwesomeIcon
                icon={faTwitter}
                className="p-3 bg-sky-700 text-2xl rounded-l-lg"
              />{" "}
              <p className="px-2 mx-auto">LOGIN WITH TWITTER</p>
            </button>
            <button className="bg-red-500 text-white flex items-center rounded-lg my-2">
              <FontAwesomeIcon
                icon={faGoogle}
                className="p-3 bg-red-700 text-2xl rounded-l-lg"
              />{" "}
              <p className="px-2 mx-auto">LOGIN WITH GOGGLE</p>
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(
              'https://www.asianpaints.com/content/dam/asian_paints/colours/room-shots/yellows-greens-colour-shade-asian-paints-7915.jpg'
            )`,
          }}
          className="w-full h-full bg-cover bg-no-repeat"
        ></div>
      </div>
    </section>
  );
};

export default Pages_login1;
