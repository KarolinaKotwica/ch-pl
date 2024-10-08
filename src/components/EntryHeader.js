import React, { FC } from "react";
import Category from "../models/Category";

const MainHeader = ({ category }) => {
  console.log("MainHeader category:", category);
  console.log("MainHeader category.name:", category?.name);
  return (
    <div className="main-header">
      <div
        className="title-bar"
        style={{ marginBottom: ".25em", paddingBottom: "0" }}
      >
        <strong>{category?.name || "Placeholder"}</strong>
      </div>
    </div>
  );
};

export default MainHeader;