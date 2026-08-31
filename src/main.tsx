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

// Only the explicitly published Andres pages use the Andres site.
// Any other path falls back to the existing AutomateFlow home experience,
// preserving the old behavior for unknown URLs without changing the URL.
createRoot(document.getElementById("root")!).render(
  isAndresRoute ? <AndresSite /> : <App />
);
