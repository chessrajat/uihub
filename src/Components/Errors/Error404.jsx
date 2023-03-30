import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full dark:bg-slate-900">
      <img
        src="/img/vectors/404error.svg"
        alt="Error 404"
        className="w-full h-screen cursor-pointer"
        onClick={() => navigate(-1)}
        draggable={false}
      />
    </div>
  );
};

export default Error404;
