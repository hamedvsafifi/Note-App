import { useEffect } from "react";

export default function SystemTheme() {
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (isDark: boolean) => {
      document.documentElement.classList.toggle("dark", isDark);
    };

    // Initial apply
    applyTheme(mql.matches);

    // Listen for OS theme changes
    mql.addEventListener("change", (e) => applyTheme(e.matches));

    // Cleanup
    return () => {
      mql.removeEventListener("change", (e) => applyTheme(e.matches));
    };
  }, []);

  return null;
}
