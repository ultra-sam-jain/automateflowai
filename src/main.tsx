import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AndresSite from "./andresSite.tsx";
import "./styles/index.css";

const path = window.location.pathname.replace(/\/$/, "") || "/";
const publishedAndresRoutes = [
  "/andres",
  "/andres/athletes",
  "/andres/about",
  "/gym",
  "/baseball",
];
const isAndresRoute = publishedAndresRoutes.includes(path);

if (path !== "/" && !isAndresRoute) {
  window.location.replace("/");
}

createRoot(document.getElementById("root")!).render(
  isAndresRoute ? <AndresSite /> : <App />
);
