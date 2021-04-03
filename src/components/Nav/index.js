import React from "react";

function Nav(props) {
  const { contactSelected, portfolioSelected, setUserRequest } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Mitchell Heyn
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() =>
                setUserRequest({
                  contactSelected: false,
                  portfolioSelected: false,
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
                  })
                }
              >
                My Work
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
