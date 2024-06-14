import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <Link to="skill">Skill</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default About;
