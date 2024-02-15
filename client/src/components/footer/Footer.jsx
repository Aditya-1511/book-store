import React from "react";
import "./footer.css";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <nav className="footer bg-dark">
      <div className="container-fluid d-flex justify-content-around align-items-center">
        <a className="text-light" href="#link">
          About Us
        </a>
        <a className="text-light" href="#link">
          Contact
        </a>
        <a href="#lll" className="text-light">
          <RiTwitterXFill /> &nbsp;&nbsp;&nbsp;
          <SlSocialLinkedin /> &nbsp;&nbsp;&nbsp;
          <BiLogoGmail />
        </a>
      </div>
    </nav>
  );
}

export default Footer;
