import { HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const items = [
  {
    Icon: FaGithub,
    url: "https://github.com/kafiln/salati",
  },
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/kafiln/",
  },
];

const Footer = () => {
  return (
    <HStack bgColor="gray.300" p={2} justifyContent="center">
      {items.map(({ Icon, url }, index) => (
        <Link key={index} href={url} target="_blank" rel="noopener noreferrer">
          <Icon size="1.4em" />
        </Link>
      ))}
    </HStack>
  );
};

export default Footer;
