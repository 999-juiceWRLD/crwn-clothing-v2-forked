import React from "react";
import CategoryMenu from "../../components/category-menu/CategoryMenu.component.jsx";
import { categories } from "../../categories.js";
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            <Outlet />
            <CategoryMenu categories={categories}/>
        </div>
    );
}

export default Home;