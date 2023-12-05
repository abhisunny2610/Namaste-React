import React from "react"
import ReactDOM from "react-dom/client"

const name = React.createElement(
    "p",
    {
        id : "name",
        key: "name"
    },
    "My name is Abhishek"
)

// jsx
const heading2 = (
    <h2 key="heading2" className="heading2">
        This is heading2.
    </h2> 
)

// component
const Header = () => {
    return <h1>This is function component.</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(name)  