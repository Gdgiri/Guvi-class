import React, { useState } from "react";
import Component from "./Components/Component";
import ComB from "./Components/ComB";
import Compc from "./Components/Compc";


const App = () => {
  let family = [
    { name: "Sivaramakrishnan", relation: "Father", age: "60" },
    { name: "Vijayalakshmi", relation: "Mother", age: "50" },
    { name: "Hariramakrishnan", relation: "Brother", age: "24" },
    { name: "Giridharan", relation: "ME", age: "22" },
  ];

  const a = 10;

  const [value, setvalue] = useState(0);

  
  return (
    <>
      <h2>The Value of a in props: {a}</h2>
      <h2>The value of a in state: {value}</h2>
      <h2>The decrease value is: {val}</h2>
      {/* <Component family={family} /> */}
      <ComB a={a} />
      
      <Compc setvalue={setvalue} value={value} />
      
    </>
  );
};

export default App;
