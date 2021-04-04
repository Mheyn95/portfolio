import React from "react";

function Nav(props) {
  const {
    contactSelected,
    portfolioSelected,
    resumeSelected,
    setUserRequest,
  } = props;

  return (
    <header className="flex-row px-1 navbar">
      <h2>
        <a data-testid="link" href="/">
          Mitchell Heyn
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <a
              data-testid="about"
              href="#about"
              onClick={() =>
                setUserRequest({
                  contactSelected: false,
                  portfolioSelected: false,
                  resumeSelected: false,
                })
              }
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <a data-testid="contact" href="#contact">
              <span
                onClick={() =>
                  setUserRequest({
                    contactSelected: true,
                    portfolioSelected: false,
                    resumeSelected: false,
                  })
                }
              >
                Contact
              </span>
            </a>
          </li>
          <li className={`mx-2 ${portfolioSelected && "navActive"}`}>
            <a data-testid="portfolio" href="#work">
              <span
                onClick={() =>
                  setUserRequest({
                    contactSelected: false,
                    portfolioSelected: true,
                    resumeSelected: false,
                  })
                }
              >
                My Work
              </span>
            </a>
          </li>
          <li className={`mx-2 ${resumeSelected && "navActive"}`}>
            <a data-testid="resume" href="#resume">
              <span
                onClick={() =>
                  setUserRequest({
                    contactSelected: false,
                    portfolioSelected: false,
                    resumeSelected: true,
                  })
                }
              >
                Resume
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
