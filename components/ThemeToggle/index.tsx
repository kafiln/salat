import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export interface ThemeToggleProps {
  size?: number | string;
}

const ThemeToggle = ({ size = 1.5 }: ThemeToggleProps) => {
  const { toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(FaMoon, FaSun);

  return (
    <Box onClick={toggleColorMode} cursor="pointer">
      <Icon size={`${size}em`} />
    </Box>
  );
};

export default ThemeToggle;
