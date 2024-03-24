import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css"; 

// Find the root element in your HTML
const container = document.getElementById("root");
// Create a root for your application
const root = createRoot(container);

// Initial render, wrapping App in React.StrictMode for additional warnings and checks in development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

