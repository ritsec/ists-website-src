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
        <h1>ISTS 2025</h1>
        <h3>February 28th - March 2nd 2025 @ RIT</h3>
      </div>
      <div>
        <h2>Signups</h2>
        <a href="https://forms.gle/n25Y2HkSWHP14G3V7" target="_blank" rel="noreferrer">
          2026 Interest Form
        </a>
      </div>
    </div>
  );
};

export default Register;
