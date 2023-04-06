import {
  faCircleUser,
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Pages_register1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
                name="name"
                placeholder="Name"
                className="bg-transparent w-full p-3.5 outline-none text-gray-600"
              />
            </div>
            <div className="border-2 flex rounded-lg my-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="p-3.5 border-r-2 text-2xl text-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
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
            <div className="border-2 flex rounded-lg my-5 relative">
              <FontAwesomeIcon
                icon={faKey}
                className="p-3.5 border-r-2 text-2xl text-gray-400"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="bg-transparent w-full p-3.5 pr-10 outline-none text-gray-600"
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEye : faEyeSlash}
                className="absolute right-3 top-4 text-gray-400 cursor-pointer text-xl"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
            <div className="mt-10 mb-6 flex justify-between items-center">
              <input
                type="submit"
                value="Sign up"
                onClick={(e) => e.preventDefault()}
                className="bg-blue-500 text-white px-6 py-2.5 rounded-lg text-lg cursor-pointer w-full"
              />
            </div>
            <div className="flex gap-2">
              Already have a account?
              <a href="#/" className="text-sky-500">
                Login Now
              </a>
            </div>
          </form>
        </div>
        <div
          style={{
            backgroundImage: `url(
          'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000'
        )`,
          }}
          className="w-full h-full bg-cover bg-no-repeat"
        ></div>
      </div>
    </section>
  );
};

export default Pages_register1;
