import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProjectProvider from "./components/context/ProjectContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </BrowserRouter>
);
