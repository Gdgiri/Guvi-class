import React from "react";

const ComB = ({ a }) => {
  const handleSubmit = () => {
    a = a + 1;
    console.log(a);
  };
  return (
    <>
      <h1>{a}</h1>
      <button onClick={handleSubmit}>Click</button>
    </>
  );
};

export default ComB;
