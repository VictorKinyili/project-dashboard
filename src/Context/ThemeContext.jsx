import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem("ktech-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("ktech-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
