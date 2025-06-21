import React from "react";

import "./about.scss";
import HeroBg from "../../res/diagonal-lines.svg";

const About: React.FC = (): React.ReactElement => {
  return (
    <div className="about-container">
      <div
        className="hero mini-hero"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
      >
        <h1>About</h1>
      </div>
      <div className="content">
        <div className="card">
          <h2>Overview</h2>
          Each spring, ISTS brings together eighteen collegiate teams from across the country for a hands-on, student-built 
          cybersecurity competition to test a wide range of skills. Selected universities send teams of five students, and RIT 
          completes the roster with the winners of our internal red vs. blue competition, {" "}<a href="https://irsec.club" target="_blank" rel="noreferrer">IRSeC</a>{" "}. 
          Over the course of the competition, teams face a barrage of technical challenges that test their skills in system hardening, 
          incident response, technical writing, and more. The competition is designed to be a fun and educational experience, 
          allowing students to apply their knowledge while also learning from their peers and industry professionals.
          <br></br>
          ISTS is designed and driven entirely by students from RITSEC, the student-run cybersecurity club at the Rochester Institute of Technology. 
          From planning and scheduling, to infrastructure deployment and challenge development, every aspect of the competition is built from the ground up by RITSEC club members.
        </div>
        <div className="card">
          <h2>What makes us different?</h2>
          ISTS uniquely integrates purple teaming in addition to the traditional red vs. blue format, meaning that blue teams are 
          permitted to attack each others' systems. The competition also includes a King of the Hill (KotH) component, where teams 
          race to take and hold control of specific vulnerable systems. Additionally, a capture-the-flag (CTF) is open throughout the 
          weekend for an extra layer of challenges. Finally, ISTS features “The Game,” a theme-specific minigame that changes year to 
          year. These fast-paced elements come together to let competitors demonstrate their full range of skills; there's never a dull moment.
          <br></br>
          The competition is supported by multiple student-led roles. The black team is responsible for building and managing the technical 
          environment that powers the event. The white team supports day-of competition logistics and acts as the bridge between blue teams 
          and the black team. Meanwhile, the red team, composed of RITSEC alumni and other industry professionals, delivers offensive pressure 
          throughout the weekend, simulating real-world adversaries to challenge the teams' defensive skills.
        </div>
      </div>
    </div>
  );
};

export default About;
