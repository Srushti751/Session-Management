import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Context } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";
root.render(
  <React.StrictMode>
    <Context.Provider value={currentUser}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
