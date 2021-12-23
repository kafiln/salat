import { Flex } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex justifyContent="flex-end" bgColor="gray.300" p={2}>
      <ThemeToggle />
    </Flex>
  );
};

export default Header;
