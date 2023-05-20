import React from "react";
import "./categories.styles.scss";
import "../category-item/category-item.styles.scss";
import CategoryItem from "../category-item/CategoryItem.component.jsx";

function CategoryMenu({ categories }) {
    return (
        <div className="categories-container">
      
            {categories.map((category) => (
            <CategoryItem 
                key={category.id}
                imageUrl={category.imageUrl}
                title={category.title}
            />
            ))}
        </div>
    );
}

export default CategoryMenu;