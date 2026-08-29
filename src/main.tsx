import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AndresSite from "./andresSite.tsx";
import "./styles/index.css";

const isAndres = window.location.pathname === "/andres" || window.location.pathname.startsWith("/andres/");
createRoot(document.getElementById("root")!).render(isAndres ? <AndresSite /> : <App />);
