import { Flex } from "@chakra-ui/react";
import { useThemedColors } from "@hooks/useInvertColors";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const colors = useThemedColors();
  return (
    <Flex justifyContent="flex-end" {...colors} p={2}>
      <ThemeToggle />
    </Flex>
  );
};

export default Header;
