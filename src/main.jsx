import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          <App />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
