import React from "react";

const Component = ({ family } ) => {

  return (
    <>
      <div className="container">
        {family.map((ele, index) => {
          return (
            <div key={index}>
              <h1>Name: {ele.name}</h1>
              <h1>Age: {ele.age}</h1>
              <h1>Relation: {ele.relation}</h1>
            </div>
          );
        })}
      </div>
    
    </>
  );
};

export default Component;
