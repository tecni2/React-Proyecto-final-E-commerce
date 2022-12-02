import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex-icon">
        <div className="icon">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>

        <div className="icon">
          <a
            href="https://www.linkedin.com/in/eleazarchusmita/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
