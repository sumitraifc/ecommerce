import { useTheme } from "../ThemeProvider";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 w-full py-2 bg-color1 rounded-lg border  dark:bg-darkCard dark:text-darkText"
    >
      {theme === "dark" ? "🌙  " : "☀️"}
    </button>
  );
};

export default DarkModeToggle;