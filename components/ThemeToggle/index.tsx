import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export interface ThemeToggleProps {
  size?: number | string;
}

const ThemeToggle = ({ size = 1.5 }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const Icon = theme === "dark" ? FaSun : FaMoon;

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
    >
      <Icon size={`${size}em`} />
    </div>
  );
};

export default ThemeToggle;
