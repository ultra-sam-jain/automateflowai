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

// The Andres site only owns explicitly published paths.
// Unknown paths must use the original AutomateFlow 404/route behavior.
createRoot(document.getElementById("root")!).render(
  isAndresRoute ? <AndresSite /> : <App />
);
