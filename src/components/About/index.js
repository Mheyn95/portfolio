import React from "react";
import picture from "../../assets/images/Me.jpeg";

const About = () => {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <div className="img-container">
        <img className="image" src={picture} alt="Mitchell Heyn" />
      </div>

      <p>
        My name is Mitchell Heyn and I am an aspiring full-stack web developer!
        I am currently going through a coding bootcamp to improve my skills and
        get into a career in development! I graduated with a degree in Business
        Information Systems from the University of Utah in 2019, I fell in love
        with development in my limited experience in coding through the
        Information Systems program and decided to further my knowledge by going
        through a bootcamp.
      </p>
      <p>
        I enjoy spending time with my wife and family. I love anything to do
        with the Utah Jazz, whether it is watching a game or discussing the team
        with my friends and coworkers. I also enjoy playing soccer with friends
        and family.
      </p>
    </section>
  );
};

export default About;
