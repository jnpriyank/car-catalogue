import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import CarsData from "./data/cars.json";
import CategoriesData from "./data/categories.json";

const cars= JSON.parse(JSON.stringify(CarsData));
const categories= JSON.parse(JSON.stringify(CategoriesData));

const rootEl = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <App categories={categories} cars={cars}></App>
    </React.StrictMode>, 
    rootEl
);