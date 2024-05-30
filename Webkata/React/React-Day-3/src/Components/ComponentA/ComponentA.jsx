import React from "react";
import "./ComponentA.css";

const ComponentA = ({ a },{arrobj}) => {
  const handleSubmit = () => {
    alert("Hai you click that");
  };
  return (
    <>
      <h1 style={{ color: "blue" }} className="head">
        Giri{a}
      </h1>

   

      <button onClick={handleSubmit} className="btn btn-primary">Click me</button>
    </>
  );
};

export default ComponentA;
