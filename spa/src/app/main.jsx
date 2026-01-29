import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/app/styles/index.css";
import "@/app/styles/tokens.css";
import "@/app/styles/layout.css";

import App from "@/app/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
