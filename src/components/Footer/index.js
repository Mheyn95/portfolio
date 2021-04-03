import React from "react";

const Footer = () => {
  return (
    <div className="information contact-links">
      <ul>
        <li>
          <a href="tel:801-875-0300">801-875-0300</a>
        </li>

        <li>
          <a href="mailto:mheyn95@gmail.com">mheyn95@gmail.com</a>
        </li>

        <li>
          <a
            href="https://github.com/Mheyn95/mheyn95.github.io"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://linkedin.com/in/mitchellheyn"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a
            href="https://stackoverflow.com/users/14106961/mheyn95"
            target="_blank"
            rel="noreferrer"
          >
            Stack Overflow
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
