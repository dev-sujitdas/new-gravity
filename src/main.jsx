import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProjectProvider from "./components/context/ProjectContext.jsx";
import { BrowserRouter } from "react-router-dom";
import ServiceProvider from "./components/context/ServiceContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ServiceProvider>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </ServiceProvider>
  </BrowserRouter>
);
