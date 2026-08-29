import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AndresSite from "./andresSite.tsx";
import "./styles/index.css";

const path = window.location.pathname.replace(/\/$/, "") || "/";
const isAndresRoute = [
  "/andres",
  "/andres/athletes",
  "/andres/about",
  "/gym",
  "/baseball",
].includes(path);

createRoot(document.getElementById("root")!).render(
  isAndresRoute ? <AndresSite /> : <App />
);
