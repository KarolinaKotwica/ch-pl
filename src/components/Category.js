import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { getCategories } from "../services/DataService";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const GroupCategory = () => {
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
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
      <h2 className="category-text">OGŁOSZENIA<br />Znajdź potrzebne informacje w poniższych kategoriach:</h2>
      <div className="ag-box">
        {Categories.map((category) => (
          <div className="ag-item" key={category.id}>
            <Link to={`/categories/${category.id}`} className="ag-item_link">
              <div className="ag-item_bg"></div>

              <div className="ag-item_title">
                {category.name} 
              </div>

              <div className="ag-item_date-box">
                Aktualizacja:
                <span className="ag-item_date">
                  &nbsp;04.11.2022
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default GroupCategory;
