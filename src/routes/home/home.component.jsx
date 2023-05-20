import React from "react";
import CategoryMenu from "../../components/category-menu/CategoryMenu.component.jsx";
import { categories } from "../../categories.js";

function Home() {
    return (
        <CategoryMenu categories={categories}/>
    );
}

export default Home;