import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Silver Alcid</h4>
      <h4>Designed by Devansh Sahni</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className="footerLinks">
        <a href="https://github.com/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:silveralcid@outlook.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
