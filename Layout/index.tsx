import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import ThemeToggle from "@components/ThemeToggle";
import React from "react";

const Header = () => {
  return (
    <Flex justifyContent="flex-end" bgColor="gray.300" py={4} px={2}>
      <ThemeToggle />
    </Flex>
  );
};

const Footer = () => {
  return (
    <Center bgColor="gray.300" py={4} px={2}>
      <Text>Kafil @2021</Text>
    </Center>
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
