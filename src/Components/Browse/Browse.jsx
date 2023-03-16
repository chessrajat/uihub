import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Button1 from "../../UIElements/Buttons/Button1";
import Featured from "../CategoryPages/Featured";
import Navbar from "../Home/Navbar";
import ElementContainer from "./ElementContainer";
import SideNav from "./SideNav";

const Browse = ({ title }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.title = title;
    fetch("/data/categories.json")
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        setCategories(data);
      });
    
  }, []);
  return (
    <section className="font-poppins select-none">
      <Navbar />
      <section>
        <div className="flex gap-4 w-full">
          <div className="max-h-screen overflow-y-auto basis-96">
            <SideNav categories={categories} />
          </div>
          <div className="w-full">
            <div className="my-5"></div>
            <Featured />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Browse;
