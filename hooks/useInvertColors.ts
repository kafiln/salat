import { useTheme } from "next-themes";

export const useThemedColors = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return {
    className: isDark
      ? "bg-white text-black"
      : "bg-black text-white",
  };
};