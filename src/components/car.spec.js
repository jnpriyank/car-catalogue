import React from "react";
import { shallow } from "enzyme";
import Car from "./car";

describe("car component", () => {
  it("should render successfully", () => {
    const wrapper = shallow(<Car name="800" imageName="800.png" ></Car>);
    expect(wrapper).toMatchInlineSnapshot(`
    <figure
      className="body-item"
    >
      <img
        alt="800"
        src="images/800.png"
      />
      <figcaption>
        800
      </figcaption>
    </figure>
    `);
});
});