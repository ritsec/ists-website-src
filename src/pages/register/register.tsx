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
        <h1>ISTS 2024</h1>
        <h3>March 1st-3rd 2024 @ RIT</h3>
      </div>
      <div>
        <h2>Signups</h2>
        <a href="https://forms.gle/rCkgemX6Jzwk6HY9A" target="_blank" rel="noreferrer">
          Interest Form
        </a>
      </div>
    </div>
  );
};

export default Register;
