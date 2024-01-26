// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import axios from 'axios'

// import Button from "./Button";

const Signin = () => {
  const navigate = useNavigate();
  const [token, setoken] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinData = async (e) => {
    e.preventDefault();

    // let  proxy="http://localhost:5000"

    //    await axios.post(`${proxy}/signinaa`,{email,password}).then((resd)=>{
    //       console.log("data done",resd.data)

    //       window.alert("Signin successful ")
    //       navigate("/",{replace:true})
    //       let x =localStorage.setItem('data',resd.data)

    //    }).catch((err)=>{
    //     window.alert("Invalid Credentials" )
    //       console.log(err)
    //     })

    // '''''
    const res = await fetch("http://localhost:5000/signinaa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    let token = data ? data.user.email : "";
    console.log(token);

    var c = localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem('user',JSON.stringify(data.user))
    setoken(c);

    console.log(data);
    if (res.status === 400 || !data) {
    console.log(res);
    } else {
    
      console.log("Sign in Successful");

      navigate("/", { replace: true });
    }
  };



  useEffect(() => {
    const getToken = localStorage.getItem("token");
    console.log(getToken);
    if(!getToken){
      // alert('login')
      
    }else{
      // alert("go to dash")
    }
  }, []);












  return (
    <>
      <div className="main-form">
        <div className="center-form">
          <div className="left-form">
            <img
              src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg?size=338&ext=jpg"
              alt=""
            />
          </div>
          <div className="right-form">
            <form method="POST">
              <h1>Sign In</h1>

              <div className="email input-style">
                <MdEmail />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="lock input-style">
                <BiSolidLockAlt />
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-autocomplete="none"
                />
              </div>

<div className="btn-signin">
              <button className="sign-btn" onClick={signinData}>Sign In</button>
              <Link  to={"/register"}><button className="reg-btn" >Register</button></Link> 
 </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
