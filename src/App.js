import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";

function App() {
  const [userRequest, setUserRequest] = useState({
    contactSelected: false,
    portfolioSelected: false,
  });
  return (
    <div>
      <Nav userRequest={userRequest} setUserRequest={setUserRequest}></Nav>
      <main>
        {!userRequest.contactSelected ? (
          !userRequest.portfolioSelected ? (
            <>
              <About></About>
            </>
          ) : (
            <Portfolio></Portfolio>
          )
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
