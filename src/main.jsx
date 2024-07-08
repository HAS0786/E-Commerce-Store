import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContext from "./AuthTheme/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";
import FormContext from "./AuthContext/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <FormContext>
          <App />
        </FormContext>
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);
