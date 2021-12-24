import React from "react";
import "./App.css";

export default function Cards(props) {
  return (
    <>
      <div className="h5">User Details</div>
      <div className="data1">
        {props.users.map((user) => {
          return (
            <div className="data">
              <h2 className="h1">
                {user.first_name}
                {user.last_name}
              </h2>
              <img src={user.avatar} alt="img" className="i1"></img>

              <p className="h2">{user.email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
