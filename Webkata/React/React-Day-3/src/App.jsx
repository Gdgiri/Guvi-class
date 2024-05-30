import React from "react";
import ComponentA from "./Components/ComponentA/ComponentA";
import ComponentB from "./Components/ComponentB/ComponentB";
import ComponentC from "./Components/ComponentC/ComponentC";
import ComponentD from "./Components/ComponentD/ComponentD";

const App = () => {
  const a = 10;

  const arr = [1, 2, 3, 4, 5];

  const obj = {
    name: "giri",
    age: 22,
  };

  const arrobj = [
    { name: "hari", age: 24 },
    { name: "sivaraman", age: 60 },
    { name: "viji", age: 50 },
  ];
  return (
    <>
      <h1 className="text-primary">App Components</h1>
      <ComponentA a={a} arrobj={arrobj} />
      <ComponentB arr={arr} />
      <ComponentC obj={obj} />
      <ComponentD />
    </>
  );
};

export default App;
