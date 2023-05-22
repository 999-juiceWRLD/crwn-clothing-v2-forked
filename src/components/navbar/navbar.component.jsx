import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function Navbar() {
    return (
        <React.Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/home">
                    <Logo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                </div>
            </div>
            <Outlet />
        </React.Fragment>
    );
}

export default Navbar;