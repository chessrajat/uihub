import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComponentCategory from "../CategoryPages/ComponentCategory";
import Featured from "../CategoryPages/Featured";
import Navbar from "../Home/Navbar";
import DrawableSideNav from "./DrawableSideNav";
import SideNav from "./SideNav";

const Browse = ({ title }) => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [categoryDescription, setCategoryDescription] = useState("");

  const [mobileMenu, setMobileMenu] = useState(false);

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

  useEffect(() => {
    const desc = categories.filter((item) => item.id === componentCategory);
    if (desc.length > 0) {
      setCategoryDescription(desc[0].description);
    }
    setMobileMenu(false);
  }, [componentCategory, categories]);
  return (
    <section className="font-poppins select-none">
      <Navbar />
      <section className={`${mobileMenu && "blur-sm scale-105 fixed"}`}>
        <div className="flex gap-4 w-full">
          <div className="max-h-screen overflow-y-auto fixed w-0 md:w-56 xl:w-80">
            <SideNav
              categories={filteredCategories}
              component={componentCategory}
              search={filterSearch}
            />
          </div>
          <div className="w-full ml-0 md:ml-48 xl:ml-80">
            <div className="my-5"></div>
            {componentCategory === "" ? (
              <Featured />
            ) : (
              <ComponentCategory
                component={componentCategory}
                description={categoryDescription}
              />
            )}
            <div className="my-5"></div>
          </div>
        </div>
      </section>
      {mobileMenu && (
        <DrawableSideNav
          filteredCategories={filteredCategories}
          componentCategory={componentCategory}
          filterSearch={filterSearch}
        />
      )}

      <button
        className="bg-violet-800 text-white text-xl px-4 py-2 
                          rounded-lg fixed bottom-2 right-2 md:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <FontAwesomeIcon icon={mobileMenu ? faClose : faBars} />
      </button>
    </section>
  );
};

export default Browse;
