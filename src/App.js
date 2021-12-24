import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "react-loader-spinner";
import Cards from "./Card";

function App() {
  const [users, setUsers] = useState([]);
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [c, changec] = useState(false);
  const ClickEvent = () => {
    changec(!c);
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const constant = await response.json();
    setUsers(constant.data);
    setInterval(() => {
      setIsDateLoaded(true);
    }, 3000);
  };

  return (
    <div className="App">
      <div className="h3">
        <a className="h4" href="#">
          D Mart
        </a>

        <button className="button" onClick={ClickEvent}>
          Get Data
        </button>
      </div>

      {c ? (
        isDateLoaded ? (
          <Cards users={users} />
        ) : (
          <Loader className="l1" />
        )
      ) : (
        <div className="d1">
          {" "}
          If data not found click on Get Data button again{" "}
        </div>
      )}
    </div>
  );
}

export default App;
