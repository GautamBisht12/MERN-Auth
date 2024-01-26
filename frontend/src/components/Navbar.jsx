
// import {useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate  } from "react-router-dom";
import { useEffect,useState } from "react";

// import Signin from "./Signin";

const Navbar = () => {
  const [userName  , setUserName] = useState("")
  const navigate = useNavigate();
  
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true to show the logout button by default

    const handleLogout = () => {
      let token = localStorage.getItem("token");
  
      if (token) {
        localStorage.removeItem("token");
        setIsLoggedIn(false); // Set to false when logging out
      }
  
      navigate("/logout");
     
     
    }


    
      
      const userToken = localStorage.getItem("token")
      
      useEffect (()=>{
      const userInfo = ()=>{
        if(userToken){
        let user = localStorage.getItem("user");
      
        console.log(JSON.parse(user));
        const y = JSON.parse(user);
        console.log(y);
        
      setUserName(y.name)
        }else{
        console.log('No token found')
        }
      
      }
      userInfo();
      }, [userToken])

    
  return (
    <>
      <nav className="header">
        <div className="nav">
          <div className="left">
            <img
              src="https://th.bing.com/th/id/OIP.w9avI4evGqUppi0qXZ9j2wHaHa?pid=ImgDet&rs=1"
              alt=""
            />
            <h1>BiSHT</h1>
          </div>
          <div className="right">
            <Link to={"/"}> Home</Link>
            <Link to={"/about"}> About</Link>
            {/* <Link to={"/contact"}> Contact</Link> */}
            <Link to={"/signin"}> Sign In</Link>
            <Link to={"/register"}> Register</Link>


            {userName ? (
        <button className="logout" onClick={handleLogout}>Logout</button>
      ) : ""}
          
          </div>

          <div className="mobile-nav-btn">
            <AiOutlineMenu size={"25px"} className="menu"  />
            <AiOutlineClose size={"25px"} className="close" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
