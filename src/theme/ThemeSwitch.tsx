import { useTheme } from "./components/ThemeContext";

type Props = {};

function ThemeSwitch({}: Props) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      className="
        relative inline-flex items-center
        h-8 w-14
        rounded-full
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-900
        cursor-pointer
        bg-gray-300 dark:bg-gray-700
      "
    >
      {/* Toggle Knob */}
      <span
        className={`
          inline-block h-6 w-6 transform rounded-full bg-white shadow-md
          transition-transform duration-300
          ${isDark ? "translate-x-6" : "translate-x-1"}
        `}
      />

      {/* Optional Icon Layer */}
      <span className="absolute left-2 text-xs">🌞</span>
      <span className="absolute right-3 text-xs">🌙</span>
    </button>
  );
}

export default ThemeSwitch;
