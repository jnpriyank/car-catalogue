import React from "react";

const CategoryList = (props) => {

    const onClickHandler = (e) => {
        props.onCategoryChange(e.target.innerText);
    }

    return (
        props.categories.map((category) => <div className={"category" + (category.name === props.selectedCategory? " selected": "")} onClick={onClickHandler}>{category.name}</div> )
    );
};

export default CategoryList;