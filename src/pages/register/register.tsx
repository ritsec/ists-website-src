import React from "react";

import "./register.scss";
import HeroBg from "../../res/diagonal-lines.svg";

const Register: React.FC = (): React.ReactElement => {
  return (
    <div
      className="home register-container"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0)), url(${HeroBg})` }}
    >
      <div className="info">
        <h1>ISTS 2023</h1>
        <h3>March 3th-5th 2023 @ RIT</h3>
      </div>
      <div>
        <h2>Signups</h2>
        <a href="https://forms.gle/AWy8BbjH2V9SLuRa7" target="_blank" rel="noreferrer">
          White Team (RIT Only)
        </a>
      </div>
    </div>
  );
};

export default Register;
