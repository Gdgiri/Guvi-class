import React, { useState } from "react";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";

const App = () => {
  //props

  const a = 10;

  //useState()

  const [initial, current] = useState(0);

  return (
    <>
      <h1>useState and props</h1>

      <h2>The props value is {a}</h2>

      <h2>The useState value is {initial}</h2>

      <CompA a={a} />
      <CompB current={current} initial={initial} />
      <CompC current={current} initial={initial} />
    </>
  );
};

export default App;
