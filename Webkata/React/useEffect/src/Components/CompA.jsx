import React, { useEffect, useState } from "react";

const CompA = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("Unmounting");
    };
  }, []);

  return (
    <>
      <h1>UseEffect</h1>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >Click </button>
    </>
  );
};

export default CompA;
