import React, { useState } from "react";

const CompC = ({ current, initial }) => {
  const [status, setStatus] = useState(true);
  const handleInc = () => {
    setStatus(false);
    current((val) => val + 1);
  };

  const handleDec = () => {
    setStatus(true);
    initial > 0 ? current((val) => val - 1) : null;
  };

  return (
    <>
      <div>Add to cart {initial}</div>
      {status ? (
        <button onClick={handleInc}>Add</button>
      ) : (
        <button onClick={handleDec}>Delete</button>
      )}
    </>
  );
};

export default CompC;
