import profile from "../assets/vikas.jpg";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={profile} alt="logo" className="w-20 h-20 rounded-full object-cover" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/vikas-kumar-43868b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/akhil2k-lc/PortFolio" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          
          <a href="https://www.instagram.com/vikas_kumar_692?igsh=MXByZGY3eWZqNWdrNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
