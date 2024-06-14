import React, { useEffect, useState } from "react";
import "./Api.css";
import axios, { Axios } from "axios";

const Api = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    // try {
    // 1st method
    //   let res = await fetch("https://jsonplaceholder.org/users");
    //   let jsondata = await res.json();
    //   setData(jsondata);
    //   console.log(jsondata);
    // } catch (error) {
    //   console.log(error);
    // }

    // 2nd method
    await axios
      .get("https://jsonplaceholder.org/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>API Call</h1>
      {data.map((ele, index) => {
        return (
          <div key={index}>
            <div className="card border-primary mb-3 ">
              <div className="card-body">
                <h5 className="card-header">{ele.firstname} details</h5>
                <p className="card-text">{ele.id}</p>
                <p className="card-text">
                  {ele.firstname} {ele.lastname}
                </p>
                <p className="card-text">{ele.email}</p>
                <p className="card-text">{ele.birthDate}</p>
                <p className="card-text">{ele.phone}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
