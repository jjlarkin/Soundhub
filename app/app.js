// Include the Main React Dependencies
import React from "react"
import ReactDOM from "react-dom"

// Include the main Parent Component
import Main from "./components/Main"
import "./sass/main.scss"

console.log(Main)
// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Main/>, document.getElementById("app"));
