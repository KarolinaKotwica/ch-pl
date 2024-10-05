import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { getCategories } from "../services/DataService";
import React, { useState, useEffect } from "react";

const GroupCategory = () => {
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        const cats = categories.map((cat) => cat.name); // Przechowujemy tylko nazwy kategorii
        setCategories(cats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CategoriesComponent Categories={categories} />
  );
};

const CategoriesComponent = ({ Categories }) => {
  return (
    <div className="ag-format-container">
      <h2 className="category-text">Znajdź potrzebne informacje w poniższych kategoriach:</h2>
      <div className="ag-box">
        {Categories.map((category, index) => (
          <div className="ag-item" key={index}>
            <a href="#" className="ag-item_link">
              <div className="ag-item_bg"></div>

              <div className="ag-item_title">
                {category} 
              </div>

              <div className="ag-item_date-box">
                Aktualizacja:
                <span className="ag-item_date">
                  &nbsp;04.11.2022
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupCategory;
