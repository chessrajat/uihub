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
import { useParams } from "react-router-dom";

const ShowCodeContainer = () => {
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState("");
  const [isCenter, setIsCenter] = useState(false);

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

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="p-16">
        <div
          className={`flex bg-white shadow-lg p-8 rounded-lg border ${
            isCenter && "justify-center"
          }`}
        >
          <React.Suspense fallback={<Fallback />}>
            <Component />
          </React.Suspense>
        </div>
        <div className="my-8">
          <div className="flex items-center">
            <p className="mx-3 font-bold">Controls</p>
            <div className="mx-5">
              <button
                onClick={() => setIsCenter(!isCenter)}
                className={`py-2 px-4 rounded-md
                     ${
                       isCenter ? "bg-violet-800 text-white " : "bg-violet-200"
                     }`}
              >
                Center
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <CopyToClipboard
            text={code}
            onCopy={() => setCopied(true)}
            className={`absolute text-white text-xl right-2 top-1 p-2 cursor-pointer
             ${copied && "text-green-500"}`}
          >
            <p>
              {copied && "Copied"} <FontAwesomeIcon icon={faCopy} />
            </p>
          </CopyToClipboard>
          <SyntaxHighlighter
            language="jsx"
            style={atomDark}
            showLineNumbers
            wrapLongLines
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default ShowCodeContainer;
