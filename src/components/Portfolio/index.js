import React from "react";

const Portfolio = () => {
  return (
    <section className="my-5 section" id="work">
      <h1 id="portfolio">My Work</h1>
      <div className="work-grid-wrapper">
        <div className="work-grid-container">
          <div className="work-grid-item first-project">
            <a
              className="devhub"
              href="https://devhubhome.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              alt="Visit DevHub"
            >
              <span className="workSpan">DevHub</span>
            </a>
          </div>
          <div className="work-grid-item second-project">
            <a
              className="weather-board"
              href="https://mheyn95.github.io/weather-dashboard/"
              target="_blank"
              rel="noreferrer"
              alt="Visit Weather Dashboard"
            >
              <span className="workSpan">Weather Dashboard</span>
            </a>
          </div>
          <div className="work-grid-item">
            <a
              className="code-quiz"
              href="https://mheyn95.github.io/code-quiz/"
              target="_blank"
              rel="noreferrer"
              alt="Visit Code Quiz"
            >
              <span className="workSpan">Code Quiz</span>
            </a>
          </div>
          <div className="work-grid-item">
            <a
              className="password-generator"
              href="https://mheyn95.github.io/password-generator/"
              target="_blank"
              rel="noreferrer"
              alt="Visit a website to create a random password"
            >
              <span className="workSpan">Password Generator</span>
            </a>
          </div>
          <div className="work-grid-item">
            <a
              className="work-schedule"
              href="https://mheyn95.github.io/work-day-scheduler/"
              target="_blank"
              rel="noreferrer"
              alt="Visit a website to schedule your work day"
            >
              <span className="workSpan">Workday Scheduler</span>
            </a>
          </div>
          <div className="work-grid-item">
            <a
              className="trivia-game"
              href="https://mheyn95.github.io/trivia-game/"
              target="_blank"
              rel="noreferrer"
              alt="Visit Trivia Game"
            >
              <span className="workSpan">Trivia Game</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
