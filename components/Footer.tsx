import { HStack, Link } from "@chakra-ui/react";
import { useThemedColors } from "@hooks/useInvertColors";
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
  const colors = useThemedColors();
  return (
    <HStack p={2} justifyContent="center" {...colors}>
      {items.map(({ Icon, url }, index) => (
        <Link key={index} href={url} target="_blank" rel="noopener noreferrer">
          <Icon size="1.4em" />
        </Link>
      ))}
    </HStack>
  );
};

export default Footer;
