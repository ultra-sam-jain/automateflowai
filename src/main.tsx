import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AndresSite from "./andresSite.tsx";
import "./styles/index.css";

const path = window.location.pathname.replace(/\/$/, "") || "/";
const isAndresRoute = path === "/andres" || path === "/gym" || path === "/baseball" || path === "/andres/athletes" || path === "/andres/about";

createRoot(document.getElementById("root")!).render(
  isAndresRoute ? <AndresSite /> : <App />
);
