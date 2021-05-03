import React from "react";

const Portfolio = () => {
  return (
    <section className="my-5 section" id="work">
      <h1 id="portfolio">My Work</h1>
      <div className="work-grid-wrapper">
        <div className="work-grid-container">
          <div className="work-grid-item first-project">
            <a
              className="threadshare"
              href="https://threadshare.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              alt="Visit threadshare"
            >
              <span className="workSpan">ThreadSHARE</span>
            </a>
          </div>
          <div className="work-grid-item second-project">
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
          <div className="work-grid-item">
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
      <h2>GitHub Repos:</h2>
      <ul>
        <li>
          <a
            href="https://github.com/zackaryanderson/dev-hub"
            target="_blank"
            rel="noreferrer"
          >
            DevHub
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mheyn95/weather-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            Weather Dashboard
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mheyn95/code-quiz"
            target="_blank"
            rel="noreferrer"
          >
            Code Quiz
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mheyn95/password-generator"
            target="_blank"
            rel="noreferrer"
          >
            Password Generator
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mheyn95/work-day-scheduler"
            target="_blank"
            rel="noreferrer"
          >
            Workday Scheduler
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mheyn95/trivia-game"
            target="_blank"
            rel="noreferrer"
          >
            Trivia Game
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
