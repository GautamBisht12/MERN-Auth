// import react , { useEffect } from 'react'

import { useEffect, useState } from "react";
// import Button from "./Button"
import Section from "./Section";
import Home2 from "./Home2";
import { Link } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    const userInfo = () => {
      if (userToken) {
        let user = localStorage.getItem("user");

        console.log(JSON.parse(user));
        const y = JSON.parse(user);
        console.log(y);

        setUserName(y.name);
      } else {
        console.log("No token found");
      }
    };
    userInfo();
  }, [userToken]);

  return (
    <>
      <div className="hero">
        <div className="main">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="center-text">
          <h3>Welcome</h3>
          <h1>{userName}</h1>
          <h2>
            {" "}
            {!userName ? (
              <>
                <p>I am mern developer</p>
              </>
            ) : (
              <Section />
            )}{" "}
          </h2>
          <Link to="/register" style={{ color: "red", fontWeight: "900" }}>
            {!userName ? "Log in first" : ""}
          </Link>
        </div>
      </div>

      {!userName ? "" : <Home2 />}
    </>
  );
};

export default Home;
