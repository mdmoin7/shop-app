import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (_t: string) => {},
});
// export const ThemeProvider = ThemeContext.Provider;
export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const color = theme === "dark" ? "#fff" : "#333";
  const bgColor = theme === "light" ? "#fff" : "#333";

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.style.background = bgColor;
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") as string);
    }
  }, []);

  return { theme, bgColor, color, toggleTheme };
}
