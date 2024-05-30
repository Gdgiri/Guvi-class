import React from "react";
import ComponentA from "../ComponentA/ComponentA";

const ComponentC = ({ obj }) => {
  return (
    <>
      <h1>Hi </h1>
      <h2>Name: {obj.name} </h2>
      <h2>Age: {obj.age} </h2>
      <ComponentA />
    </>
  );
};

export default ComponentC;
