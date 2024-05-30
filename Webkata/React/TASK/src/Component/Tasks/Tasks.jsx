import React from "react";
import "./Tasks.css";

const Tasks = ({ arrobj }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {arrobj.map((ele, index) => (
        <div key={index}>
          <div className="col">
            <div className="card m-5 box">
              <div className="card-body m-4">
                <div className="card-text text-center disable">
                  {ele.head}
                </div>
                <div className="card-title text-center">
                  <h1>{ele.title}</h1>
                </div>
                <hr />
                <br />
                <br />
                <div className="card-text">
                  <p>{ele.a}</p>
                </div>
                <div className="card-text">
                  <p>{ele.b}</p>
                </div>
                <div className="card-text">
                  <p>{ele.c}</p>
                </div>
                <div className="card-text">
                  <p>{ele.d}</p>
                </div>
                <div className="card-text">
                  <p>{ele.e}</p>
                </div>
                <div className="card-text">
                  <p>{ele.f}</p>
                </div>
                <div className="card-text">
                  <p>{ele.g}</p>
                </div>
                <div className="card-text">
                  <p>{ele.h}</p>
                </div>
                <button className="btn btn-primary">Button</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
