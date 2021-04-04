import React, { useState } from "react";
import Header from "./components/Header";
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
      <Header
        userRequest={userRequest}
        setUserRequest={setUserRequest}
      ></Header>
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
