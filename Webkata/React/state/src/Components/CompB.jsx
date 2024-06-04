import React, { useState } from "react";
import "./CompB.css";

const CompB = ({ current, initial }) => {
  const [status, setStatus] = useState(true);
  const handleSubmit = () => {
    setStatus(false)
    current((val) => val + 1);
  };

  const handleDelete = () => {
    setStatus(true)
    initial > 0 ? current((val) => val - 1) : null;
  };

  return (
    <>
      <div className="cart">Add to cart {initial}</div>
      {status ? (
        <button onClick={handleSubmit}>Add</button>
      ) : (
        <button onClick={handleDelete}>Delete</button>
      )}
      {/* <button onClick={handleSubmit}>Add</button>
      <button onClick={handleDelete}>Delete</button> */}
    </>
  );
};

export default CompB;
