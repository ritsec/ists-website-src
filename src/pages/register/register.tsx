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
        <h1>ISTS 2027</h1>
        <h3>February 26th to February 28th @ RIT</h3>
      </div>
      <div className="form">
        <h2>Signups</h2>
        <a href="https://forms.gle/etvzcqy9XPahpiNKA" target="_blank" rel="noreferrer">
          2027 Interest Form
        </a>
      </div>
    </div>
  );
};

export default Register;
