import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Footer from "./Footer";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
);
