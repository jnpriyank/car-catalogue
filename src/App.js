import React from "react";
import "./app.css";
import {hot} from "react-hot-loader";
import CarList from "./components/CarList";

const App = (props) =>
{
    return (
        <div className="app">
            <CarList categories={props.categories} cars={props.cars}></CarList>
        </div>
    );
};

export default hot(module)(App);