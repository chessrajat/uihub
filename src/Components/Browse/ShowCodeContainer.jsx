import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../Home/Navbar";
import Fallback from "./Fallback";
import CopyToClipboard from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import useDarkMode from "../../Utils/Hooks/useDarkMode";

const ShowCodeContainer = () => {
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState("");

  const [isCenter, setIsCenter] = useState(true);
  const [theme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(
    theme === "light" ? true : false
  );

  const params = useParams();
  const componentCategory = params.ComponentCategory || "";
  const componentName = params.ElementId || "";

  const Component = React.lazy(() =>
    import(`../../UIElements/${componentCategory}/${componentName}`)
  );

  useEffect(() => {
    fetch(`/code/${componentCategory}/${componentName}.txt`)
      .then((response) => response.text())
      .then((data) => {
        setCode(data);
      });
  }, [componentCategory, componentName]);

  useEffect(() => {
    setIsDarkMode(theme === "light" ? true : false);
  }, [theme]);

  return (
    <div className="font-poppins dark:bg-slate-900 min-h-screen">
      <Navbar />
      <div className={`p-3 md:p-5 lg:p-12`}>
        <div
          className={`flex shadow-lg py-8 px-2 md:px-4 lg:px-8 rounded-lg border overflow-hidden 
                      bg-white dark:bg-slate-900 dark:border-gray-800
          ${isCenter && "justify-center"}`}
        >
          <React.Suspense fallback={<Fallback />}>
            <Component />
          </React.Suspense>
        </div>

        <div className="my-8">
          <div className="flex items-center">
            <p className="mx-3 font-bold dark:text-gray-200 dark:font-normal">
              Controls
            </p>
            <div className="mx-5 space-x-4">
              <button
                onClick={() => setIsCenter(!isCenter)}
                className={`py-2 px-4 rounded-md
                     ${
                       isCenter ? "bg-violet-800 text-white " : "bg-violet-200"
                     }`}
              >
                Center
              </button>
              {/* <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`py-2 px-4 rounded-md
                     ${
                       isDarkMode
                         ? "bg-violet-800 text-white "
                         : "bg-violet-200"
                     }`}
                >
                  <span
                    className={`${
                      isDarkMode ? "bg-blue-500" : "bg-yellow-600"
                    } inline-block h-6 w-6 rounded-full -mb-2`}
                  >
                    {isDarkMode ? (
                      <FontAwesomeIcon
                        icon={faMoon}
                        className="text-white mt-1"
                      />
                    ) : (
                      <BrightSun />
                    )}
                  </span>
                  <span className="ml-2">Switch</span>
                </button> */}
            </div>
          </div>
        </div>
        <div className="relative">
          <CopyToClipboard
            text={code}
            onCopy={() => setCopied(true)}
            className={`absolute text-xl right-2 top-1 p-2 cursor-pointer
             ${copied ? "text-green-500" : "text-white"}`}
          >
            <p>
              {copied && "Copied"} <FontAwesomeIcon icon={faCopy} />
            </p>
          </CopyToClipboard>
          <SyntaxHighlighter language="jsx" style={atomDark} showLineNumbers>
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default ShowCodeContainer;
