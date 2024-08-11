import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home";




ReactDOM.createRoot(document.getElementById('app')).render(<Home />);



// let segundos = 0;
// const renderCounter = () => {
//     ReactDOM.createRoot(document.getElementById('app')).render(<SecondsCounter segundos={segundos} />);
// };
// setInterval(() => {
//     segundos++;
//     renderCounter();
// }, 1000);
// renderCounter();