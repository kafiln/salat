import { useThemedColors } from "@hooks/useInvertColors";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const items = [
  {
    Icon: FaGithub,
    url: "https://github.com/kafiln/salat",
  },
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/kafiln/",
  },
];

const Footer = () => {
  const colors = useThemedColors();
  return (
    <div className={`flex items-center justify-center gap-4 p-2 ${colors.className}`}>
      {items.map(({ Icon, url }, index) => (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          <Icon size="1.4em" />
        </a>
      ))}
    </div>
  );
};

export default Footer;
