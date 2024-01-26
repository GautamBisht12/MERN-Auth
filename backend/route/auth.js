const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




const cors = require("cors");
require("cors");
router.use(cors());



require("../db/connect");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello world router");
});

/*create get api */
router.get("/users",async(req,res)=>{
  const myalldata =  await User.find();
  res.json(myalldata);
  console.log(myalldata);
});







router.get("/about",  (req, res) => {
  res.send("This is about us")
  
});
router.get("/contact", (req, res) => {
  
  res.send("hello from contact");
});
router.get("*", (req, res) => {
  res.send("404 error");
});
router.delete("/logout", (req, res) => {
  res.send("logout");
});




//Using Async Await Register Page
router.post("/register", async (req, res) => {
  const { name, email, phone, profession, password, cpassword } = req.body;

  if (!name || !email || !phone || !profession || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill complete form" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password does not match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        profession,
        password,
        cpassword,
      });
      const userRegister = await user.save();
      console.log(req.body);

      if (userRegister) {
        res.status(201).json({ message: "Registration successful" });
      } else {
        res.status(500).json({ error: "failed to register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});




// login route

router.post("/signinaa", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
     
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Gmail or Password" });
      } else {
        res.json({  user:userLogin });
        console.log(userLogin);

      }
    } else {
      res.status(400).json({ error: "Invalid Gmail or Password" });
    }
  } catch (err) {
    console.log(err);
  }

 


});







module.exports = router;
