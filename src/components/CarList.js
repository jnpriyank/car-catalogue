import React, { useState, useEffect } from "react";
import Car from "./car";
import CategoryList from "./categoryList";

const CarList = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(
    props.categories ? props.categories[0].name : ""
  );

  const onCategoryChangeHandler = (category) => {
    setSelectedCategory(category);
  };

  if (!props.categories || props.categories.length === 0) {
    return null;
  }

  return (
    <div className="car-list-container">
      <header className="header">
        <h2 className="item">Car</h2>
        <h1 className="item">Categories</h1>
        <div className="item nav-categories">
          <CategoryList
            categories={props.categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChangeHandler}
          ></CategoryList>
        </div>
      </header>
      <section className="body">
        {props.cars
          .filter((car) => car.category === selectedCategory)
          .map((value) => {
            return (
              <Car
                key={value.id}
                name={value.name}
                imageName={value.imageName}
              ></Car>
            );
          })}
      </section>
    </div>
  );
};

export default CarList;
