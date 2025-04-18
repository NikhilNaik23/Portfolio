import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white rounded-lg text-lg mt-10">
      <div className="flex flex-col sm:flex-row justify-evenly items-center p-5 space-y-3 sm:space-y-0">

        <a
          href="mailto:nenavathnikhil2@gmail.com"
          className="flex items-center gap-2 hover:text-gray-200 transition"
        >
          <MdEmail className="text-2xl" />
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/nikhilnaik23/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-200 transition"
        >
          <FaLinkedin className="text-2xl" />
          LinkedIn
        </a>

        <a
          href="https://github.com/NikhilNaik23"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-200 transition"
        >
          <FaGithub className="text-2xl" />
          GitHub
        </a>

        <a
          href="https://nikhils-portfolio-nnex.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-200 transition"
        >
          <FaGlobe className="text-2xl" />
          Portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
