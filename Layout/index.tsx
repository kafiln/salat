import { Box, HStack, Flex, Link as ChakraLink } from "@chakra-ui/layout";
import ThemeToggle from "@components/ThemeToggle";
import Link from "next/link";
import React, { ReactElement } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const DefaultLayout = ({
  children,
  header,
  footer,
}: {
  children: any;
  header: ReactElement;
  footer: ReactElement;
}) => {
  return (
    <Flex
      spacing={4}
      justifyContent="space-between"
      direction="column"
      height="100vh"
      overflow="hidden"
    >
      {header}
      <Box py={2} flex={1}>
        {children}
      </Box>
      {footer}
    </Flex>
  );
};

export default DefaultLayout;
