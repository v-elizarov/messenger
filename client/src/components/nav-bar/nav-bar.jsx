import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">MessageMe</Link>
            </div>
        </nav>
    )
}

export default NavBar