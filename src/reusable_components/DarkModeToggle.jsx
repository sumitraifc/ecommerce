import { useTheme } from "../ThemeProvider";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 w-full py-2 rounded-lg border bg-gray-200 dark:bg-darkCard dark:text-darkText"
    >
      {theme === "dark" ? "🌙 Dark " : "☀️ Light"}
    </button>
  );
};

export default DarkModeToggle;