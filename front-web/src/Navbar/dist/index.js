"use strict";
exports.__esModule = true;
require("./styles.css");
var Grouplogo_svg_1 = require("./Grouplogo.svg");
var react_router_dom_1 = require("react-router-dom");
function Navbar() {
    return (React.createElement("nav", { className: "main-navbar" },
        React.createElement(Grouplogo_svg_1.ReactComponent, null),
        React.createElement(react_router_dom_1.Link, { to: "/", className: "logo-text" }, "Ds Delivery")));
}
exports["default"] = Navbar;
