"use strict";
exports.__esModule = true;
require("./styles.css");
var Home_svg_1 = require("./Home.svg");
var Footer_1 = require("../Footer");
var react_router_dom_1 = require("react-router-dom");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "home-container" },
            React.createElement("div", { className: "home-content" },
                React.createElement("div", { className: "home-actions" },
                    React.createElement("h1", { className: "home-title" },
                        "Fa\u00E7a seu pedido ",
                        React.createElement("br", null),
                        " que entregamos ",
                        React.createElement("br", null),
                        "pra voc\u00EA!!!"),
                    React.createElement("h3", { className: "home-sibtitle" },
                        "Escolha o seu pedido e em poucos minutos ",
                        React.createElement("br", null),
                        "levaremoss na sua porta"),
                    React.createElement(react_router_dom_1.Link, { to: "/orders", className: "home-btn-order" }, "FAZER PEDIDO")),
                React.createElement("div", { className: "home-image" },
                    React.createElement(Home_svg_1.ReactComponent, null)))),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
