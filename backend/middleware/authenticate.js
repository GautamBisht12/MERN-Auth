// const jwt = require("jsonwebtoken")
// const User = require("../model/userSchema")

// const authenticate = async (req,res,next)=>{
// try {
//   const token = req.cookies.jwtoken;
//   const verifyToken = jwt.verify(token, process.env.SECERET_KEY);

//   const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token" : token});

//   if(!rootUser){throw new Error ('User not found')}
  
// req.token = token
// req.rootUser = rootUser
// req.userId = rootUser._id;

// next();
// } catch (err) {
//   res.status(401).send('Unauthorized:No token provided');
//   console.log(err);
// }}
// import  { useEffect } from "react";






const authenticate = ()=>{


var c = localStorage.setItem("token", JSON.stringify(token));
setoken(c);

console.log(data);
if (res.status === 400 || !data) {
  // window.alert("Email or Password is not Correct");
  // console.log("Email or Password is not Correct");
} else {
  // window.alert("Sign in Successful")
  console.log("Sign in Successful");

  navigate("/", { replace: true });
}

useEffect(() => {
const getToken = localStorage.getItem("token");
console.log(getToken);
if(!getToken){
  // alert('login')
  
}else{
  // alert("go to dash")
}
}, []);
}

module.exports =  authenticate;