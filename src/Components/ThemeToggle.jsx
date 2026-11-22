import { useTheme } from "../Context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}
