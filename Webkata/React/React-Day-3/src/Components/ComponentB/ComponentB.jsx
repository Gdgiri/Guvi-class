import React from "react";
import ComponentA from "../ComponentA/ComponentA";

const ComponentB = ({ arr }) => {
  const Submit = () => {
    alert("hai");
  };

  return (
    <>
      <h1>Hello{arr}</h1>
      <button onClick={Submit} className="btn btn-success">Click here</button>
      <h2>array value</h2>

      {arr.map((ele, index) => {
        return (
          <>
            <div key={index}>
              <h1>{ele}</h1>
            </div>
          </>
        );
      })}
      <ComponentA />
    </>
  );
};

export default ComponentB;
