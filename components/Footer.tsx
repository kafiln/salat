import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
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
      <ChakraLink>
        <Link href={GITHUB_URL}>
          <FaGithub size="1.4em" />
        </Link>
      </ChakraLink>
      <ChakraLink>
        <Link href={LINKEDIN_URL}>
          <FaLinkedin size="1.4em" />
        </Link>
      </ChakraLink>
    </HStack>
  );
};

export default Footer;
