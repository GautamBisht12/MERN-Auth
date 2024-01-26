import { useEffect, useState } from "react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
// import axios from "axios";

const About = () => {
  let x = localStorage.getItem("user");
  console.log(JSON.parse(x));
  let y = JSON.parse(x);
  console.log(y);

  const [user, setUser] = useState();
  const navigate = useNavigate();
  // const [info, setInfo] = useState([]);

  const callAboutPage = async () => {
    try {
      const res = await fetch(`http://localhost:5000/about`, {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      // console.log(res.status);
      // const data = await res.json();
      // console.log(data);
      // console.log(setUser);

      if (res.status !== 200) {
        // throw new Error("Error fetching user data");
        console.log("No user Data");
      }
      const data = await res.json();
      setUser(data.user);
      console.log(user);
    } catch (error) {
      console.log("No user Data");
      // console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (!getToken) {
      alert("login first");
      navigate("/signin");
    } else {
      // alert("You can acces about me")
    }
  }, []);

  return (
    <>
      {/* <div className="about-main">
        <form method="GET" className="aboutForm">
          <h1>This is your Log in Information</h1>
          <div className="about-center">
        

            <div className="about-right">
              <div className="about-right-top">
                <div className="right-top-user">
                  <h2>{y.name}</h2>
                  <a href="/">{y.profession}</a>
                </div>
                <div className="profile"></div>
              </div>
              <div className="about-right-bottom">
                <div className="about-me">
                  <p>User id</p>
                  <p>Name</p>
                  <p>Email</p>
                  <p>Phone</p>
                  <p>Profession</p>
                </div>
                <div className="about-info">
                  <p>{y._id}</p>
                  <p>{y.name}</p>
                  <p>{y.email}</p>
                  <p>{y.phone}</p>
                  <p>{y.profession}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div> */}
      <div className="main-about">
      <h1>User Details</h1>
        <div className="center-about">
          <div className="top">
            <div className="top-left">
              <h2>{y.name}</h2>
              <a href="/">{y.profession}</a>
            </div>
            <div className="top-right-pfp">

            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <p>User id</p>
              <p>Name</p>
              <p>Email</p>
              <p>Phone</p>
              <p>Profession</p>
            </div>
            <div className="bottom-right">
              <p>{y._id}</p>
              <p>{y.name}</p>
              <p>{y.email}</p>
              <p>{y.phone}</p>
              <p>{y.profession}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
