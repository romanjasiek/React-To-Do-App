import React from "react";
import logo from "../images/logo.png";

const Navigation = () => {
    return (
        <nav>
            <div className="left">
                <img src={logo} alt="Logo" width="125%" />
            </div>
        </nav>
    );
}

export default Navigation;