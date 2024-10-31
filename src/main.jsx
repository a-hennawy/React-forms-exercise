import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BoxList from "./BoxList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BoxList />
  </StrictMode>
);
