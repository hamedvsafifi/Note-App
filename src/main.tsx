import SystemTheme from "./SystemTheme";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SystemTheme />
    <App />
  </StrictMode>
);
