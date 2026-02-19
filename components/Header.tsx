import { useThemedColors } from "@hooks/useInvertColors";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const colors = useThemedColors();
  return (
    <div className={`flex justify-end p-2 ${colors.className}`}>
      <ThemeToggle />
    </div>
  );
};

export default Header;
