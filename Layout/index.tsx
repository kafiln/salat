import { Box, HStack, Flex, Link as ChakraLink } from "@chakra-ui/layout";
import ThemeToggle from "@components/ThemeToggle";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <Flex justifyContent="flex-end" bgColor="gray.300" py={4} px={2}>
      <ThemeToggle />
    </Flex>
  );
};

const Footer = () => {
  return (
    <HStack
      bgColor="gray.300"
      py={4}
      px={2}
      spacing={2}
      justifyContent="center"
    >
      <ChakraLink>
        <Link href="https://github.com/kafiln/salati">
          <FaGithub size="1.4em" />
        </Link>
      </ChakraLink>
      <ChakraLink>
        <Link href="https://github.com/kafiln/salati">
          <FaLinkedin size="1.4em" />
        </Link>
      </ChakraLink>
    </HStack>
  );
};

const DefaultLayout = ({ children }: { children: any }) => {
  return (
    <Flex
      spacing={4}
      justifyContent="space-between"
      direction="column"
      height="100vh"
      overflow="hidden"
    >
      <Header />
      <Box py={2} flex={1}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default DefaultLayout;
