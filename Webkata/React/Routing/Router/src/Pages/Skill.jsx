import React from "react";
import { useNavigate } from "react-router-dom";

const Skill = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Skills</h1>
      <button onClick={handleSubmit}>Home</button>
    </div>
  );
};

export default Skill;
