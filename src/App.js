import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [userRequest, setUserRequest] = useState({
    contactSelected: false,
    portfolioSelected: false,
    resumeSelected: false,
  });
  return (
    <div>
      <Nav userRequest={userRequest} setUserRequest={setUserRequest}></Nav>
      <main>
        {!userRequest.contactSelected ? (
          !userRequest.portfolioSelected ? (
            !userRequest.resumeSelected ? (
              <>
                <About></About>
              </>
            ) : (
              <Resume></Resume>
            )
          ) : (
            <Portfolio></Portfolio>
          )
        ) : (
          <ContactForm></ContactForm>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
