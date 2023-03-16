import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Button1 from "../../UIElements/Buttons/Button1";
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
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 max-h-screen overflow-y-auto">
            <SideNav categories={categories} />
          </div>
          <div className="col-span-10">
            <div className="my-5"></div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <ElementContainer />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Browse;
