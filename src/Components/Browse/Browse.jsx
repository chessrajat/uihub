import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComponentCategory from "../CategoryPages/ComponentCategory";
import Featured from "../CategoryPages/Featured";
import Navbar from "../Home/Navbar";
import SideNav from "./SideNav";

const Browse = ({ title }) => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const params = useParams();
  const componentCategory = params.ComponentCategory || "";

  const filterSearch = (e) => {
    const query = e.target.value;
    let updatedList = [...categories];
    updatedList = updatedList.filter(
      (item) => item.text.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setFilteredCategories(updatedList);
  };

  useEffect(() => {
    document.title = title;
    fetch("/data/categories.json")
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        setCategories(data);
        setFilteredCategories(data);
      });
  }, []);
  return (
    <section className="font-poppins select-none">
      <Navbar />
      <section>
        <div className="flex gap-4 w-full">
          <div className="max-h-screen overflow-y-auto basis-96">
            <SideNav
              categories={filteredCategories}
              component={componentCategory}
              search={filterSearch}
            />
          </div>
          <div className="w-full">
            <div className="my-5"></div>
            {componentCategory === "" ? (
              <Featured />
            ) : (
              <ComponentCategory component={componentCategory} />
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Browse;
