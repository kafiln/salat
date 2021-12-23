import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GITHUB_URL = "https://github.com/kafiln/salati";
const LINKEDIN_URL = "https://www.linkedin.com/in/kafiln/";

const Footer = () => {
  return (
    <HStack
      bgColor="gray.300"
      py={4}
      px={2}
      spacing={2}
      justifyContent="center"
    >
      <ChakraLink href={GITHUB_URL} target="_blank">
        <FaGithub size="1.4em" />
      </ChakraLink>
      <ChakraLink href={LINKEDIN_URL} target="_blank">
        <FaLinkedin size="1.4em" />
      </ChakraLink>
    </HStack>
  );
};

export default Footer;
