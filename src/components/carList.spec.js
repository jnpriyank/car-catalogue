import React from "react";
import { shallow } from "enzyme";
import CarList from "./carList";
import categoriesData from "../data/categories";
import carsData from "../data/cars";

describe("car list component", () => {
    it("should be rendered successfully, when given proper data", () => {
        // shallow render the component with the data
        const wrapper = shallow(<CarList categories={categoriesData} cars={carsData}></CarList>);
        expect(wrapper.find(".car-list-container")).toHaveLength(1);
        
        // perform category related assertions
        const categoryListComponent = wrapper.find(".nav-categories").find("CategoryList");
        expect(categoryListComponent).toHaveLength(1);
        expect(categoryListComponent.prop("categories")).toHaveLength(3);
        expect(categoryListComponent.prop("selectedCategory")).toEqual("Hatchbacks");
        expect(categoryListComponent).toMatchInlineSnapshot(`
<CategoryList
  categories={
    Array [
      Object {
        "description": "Hatchbacks description",
        "id": 1,
        "name": "Hatchbacks",
      },
      Object {
        "description": "Vans description",
        "id": 2,
        "name": "Vans",
      },
      Object {
        "description": "Sedans description",
        "id": 3,
        "name": "Sedans",
      },
    ]
  }
  onCategoryChange={[Function]}
  selectedCategory="Hatchbacks"
/>
`);

// perform car related assertions
expect(wrapper.find(".body Car")).toHaveLength(4);
expect(wrapper.find(".body Car")).toMatchInlineSnapshot(`
Array [
  <Car
    imageName="wagonr.png"
    key="1"
    name="Wagon R"
  />,
  <Car
    imageName="800.png"
    key="2"
    name="800"
  />,
  <Car
    imageName="celerio.png"
    key="3"
    name="celerio"
  />,
  <Car
    imageName="swift.png"
    key="4"
    name="swift"
  />,
]
`);
    });

    it("should not be rendered if there are no categories", () => {
        const wrapper = shallow(<CarList cars={carsData}></CarList>);
        expect(wrapper.find(".car-list-container")).toHaveLength(0);
        expect(wrapper).toMatchSnapshot();
    });
});