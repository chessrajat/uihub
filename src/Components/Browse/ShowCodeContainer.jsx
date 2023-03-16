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

const ShowCodeContainer = ({ classes, element, codeString }) => {
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState("");

  const Component = React.lazy(() => import(`../../UIElements/${element}`));

  useEffect(() => {
    fetch(codeString)
      .then((response) => response.text())
      .then((data) => {
        setCode(data);
      });
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="p-16">
        <div className={`bg-white shadow-lg p-12 rounded-lg border ${classes}`}>
          <React.Suspense fallback={<Fallback />}>
            <Component />
          </React.Suspense>
        </div>
        <div className="my-5"></div>
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
