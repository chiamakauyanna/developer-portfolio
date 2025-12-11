import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="text-accent flex gap-8 mt-6 lg:mt-0">
      <a href="" target="_blank" title="Facebook" className="socials">
        <FaFacebookF />
      </a>
      <a
        href="https://www.linkedin.com/in/chiamakauyanna/"
        target="_blank"
        title="Linkedin"
        className="socials"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://x.com/ChiamakaUy39624"
        target="_blank"
        title="X"
        className="socials"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://github.com/chiamakaUyanna/"
        target="_blank"
        title="Github"
        className="socials"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
