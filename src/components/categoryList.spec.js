import React from "react";
import { shallow } from "enzyme";
import CategoryList from "./categoryList";

describe("category list component", () => {
    it.only("should be rendered successfully, When categories are passed", () => {
        const categories = [
            {
                id: 1,
                name: "Hatchbacks",
                description: "Hatchbacks description"
            },
            {
                id: 2,
                name: "Vans",
                description: "Vans description"
            },
        ];
        const selectedCategory = "Vans";
        const onCategoryChangeHandler = jest.fn().mockImplementation((category) => {});

        const wrapper = shallow(<CategoryList 
                                    categories={categories} 
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={onCategoryChangeHandler}
                                >
                                </CategoryList>);

        // assertions
        // should have two divs with class category
        expect(wrapper.find(".category")).toHaveLength(2);

        // second/last div should have text as 'Vans' and should have class selected
        expect(wrapper.find(".category.selected").text()).toBe("Vans");

        // simulate click on first item
        wrapper.find(".category").first().simulate("click", {
            target: {
                innerText: "Hatchbacks",
            },
        });

        // check the method inside handler is called
        expect(onCategoryChangeHandler).toHaveBeenCalled();
        expect(onCategoryChangeHandler).toHaveBeenCalledWith("Hatchbacks");

        expect(wrapper).toMatchSnapshot();
    });

    it("should not render anything, When categories are not passed", () => {
        const categories = [];
        const selectedCategory = "";
        const wrapper = shallow(<CategoryList categories={categories} selectedCategory={selectedCategory}></CategoryList>);

        expect(wrapper.find(".category")).toHaveLength(0);
        expect(wrapper).toMatchSnapshot();
    });
});