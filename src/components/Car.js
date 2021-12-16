import React from "react";

const Car = (props) => {
  return (
    <figure className="body-item">
      <img src={"images/" + props.imageName} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
};

export default Car;
