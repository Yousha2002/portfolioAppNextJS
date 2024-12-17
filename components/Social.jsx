import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Yousha2002" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/yousha-shakeel/",
  },
  // { icon: <FaYoutube />, path: "https://youtube.com/c/your-channel" },
  // { icon: <FaTwitter />, path: "https://twitter.com/your-profile" },
];

const Social = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={`flex gap-6 ${containerStyles}`}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          passHref
          className={`w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 ${iconStyles} hover:text-blue-500`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
