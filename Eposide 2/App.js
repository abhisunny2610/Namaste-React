import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1",
    {
        id: "title",
        key:2
    },
    "this is heading 1"

);

const name = React.createElement(
    "h3",
    {
        id: "name",
        key : 1
    },
    "My name is abhishek"
)

const container = React.createElement(
    "div",
    {
        id : "container-1"
    },
    [heading, name]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);