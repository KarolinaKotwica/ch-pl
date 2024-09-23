import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { getCategories } from "../services/DataService";
import Category from "../models/Category";
import React, { useState, useEffect } from "react";

const GroupCategory = () => {
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState(
    <div></div>
  );

  useEffect(() => {
    getCategories()
      .then((categories) => {
        const cats = categories.map((cat) => {
          return <li key={cat.id}>{cat.name}</li>;
        });
        setCategories(<ul className="category">{cats}</ul>);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // return <div>{categories}</div>;
  return (
    <div class="ag-format-container">
      <div class="ag-box">
        <div class="ag-item">
          <a href="#" class="ag-item_link">
            <div class="ag-item_bg"></div>

            <div class="ag-item_title">
              
            </div>

            <div class="ag-item_date-box">
              Start:
              <span class="ag-item_date">
                04.11.2022
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
};

export default GroupCategory;
