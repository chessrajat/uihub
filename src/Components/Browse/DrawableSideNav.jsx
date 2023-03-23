import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SideNav from "./SideNav";

const DrawableSideNav = ({
  filteredCategories,
  componentCategory,
  filterSearch,
}) => {
  return (
    <div className="w-72 bg-white h-full max-h-screen overflow-y-auto z-10 fixed top-16 shadow-xl">
      <SideNav
        categories={filteredCategories}
        component={componentCategory}
        search={filterSearch}
      />
    </div>
  );
};

export default DrawableSideNav;
