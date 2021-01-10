"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Home");
var Navbar_1 = require("./Navbar");
var Orders_1 = require("./Orders");
//import { BrowserRouter, Switch, Route } from "react-router-dom";
function Routes() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Navbar_1["default"], null),
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { path: "/orders" },
                React.createElement(Orders_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: "" },
                React.createElement(Home_1["default"], null)))));
}
exports["default"] = Routes;
