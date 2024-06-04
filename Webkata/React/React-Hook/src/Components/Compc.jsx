import React from "react";

const Compc = ({ setvalue, value }) => {
  const handleSubmit = () => {
    setvalue((val) => val + 1);
  };

 
  return (
    <>
      <h2>The value of a in state: {value}</h2>
      <button onClick={handleSubmit}>Increase</button>

      
    </>
  );
};

export default Compc;
