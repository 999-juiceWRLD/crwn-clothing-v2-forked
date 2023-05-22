import React from "react";
import { Outlet } from "react-router";

function Navbar() {
    return (
        <React.Fragment>
            <div className="container my-3">
                <nav class="navbar navbar-light bg-light">
                    <span class="navbar-brand mb-0 h1 px-3">
                        This is Kahraman's Navbar
                    </span>
                </nav>
            </div>
            <Outlet />
        </React.Fragment>
    );
}

export default Navbar;