import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navbar.styles.scss";

function Navbar() {
    return (
        <React.Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/home">
                    <Logo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop" style={{ 
                        fontWeight: "bold"
                     }}>SHOP</Link>
                </div>
            </div>
            <Outlet />
        </React.Fragment>
    );
}

export default Navbar;