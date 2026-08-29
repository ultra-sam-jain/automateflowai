import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AndresSite from "./andresSite.tsx";
import "./styles/index.css";

const path = window.location.pathname.replace(/\/$/, "") || "/";
const isAndresExperience = [
  "/andres",
  "/andres/athletes",
  "/andres/baseball",
  "/andres/gym",
  "/andres/facilities",
  "/andres/about",
  "/gym",
  "/baseball",
].includes(path);

createRoot(document.getElementById("root")!).render(
  isAndresExperience ? <AndresSite /> : <App />
);
