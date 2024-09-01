import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { getCategories } from "../services/DataService";
import Category from "../models/Category";
import React, { useState, useEffect } from "react";

const GroupCategory = () => {
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState(
    <div>Nav</div>
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

  return <div>{categories}</div>;
};

export default GroupCategory;
