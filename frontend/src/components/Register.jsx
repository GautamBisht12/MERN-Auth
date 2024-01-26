import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import { MdEmail } from "react-icons/md"; 
import { useState  } from "react";
import {useNavigate } from "react-router-dom"

const Register = () => {
  const navigate  = useNavigate(); 
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "", 
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, profession, password, cpassword } = user;

    const res = await fetch("http://localhost:5000/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
    
      body:JSON.stringify({ 
        name , email, phone, profession, password, cpassword
      })
      
    })
 
    const data = await res.json();
      if(res.status === 422 || !data){ 
      window.alert("Invalid Registration")
       console.log("Invalid Registration");
     }
      else {
       window.alert(" Registration successful")
       console.log(" Registration successful ");
       
       navigate("/signin",{replace:true})
      }
    };

    // if(res.status === 422 || !data){ 
    //   window.alert("Invalid Registration")
    //   console.log("Invalid Registration");
    // }
    // else{
    //   window.alert(" Registration successful")
    //   console.log(" Registration successful ");

    //   navigate("/signin",{replace:true})
    // }

  return (
    <>
      <div className="main-form">
        <div className="center-form">
          <div className="left-form">
            <form method="POST">
              <h1>Register</h1>

              <div className="user input-style">
                <FaUserAlt />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={user.name}
                  onChange={handleInputs}
                />
              </div>
              <div className="email input-style">
                <MdEmail />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleInputs}
                />
              </div>
              <div className="phone input-style">
                <FaPhoneAlt />
                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  value={user.phone}
                  onChange={handleInputs}
                />
              </div>
              <div className="profile input-style">
                <AiFillProfile />
                <input
                  type="text"
                  name="profession"
                  placeholder="Your Profession"
                  value={user.profession}
                  onChange={handleInputs}
                />
              </div>

              <div className="lock input-style">
                <BiSolidLockAlt />

                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleInputs}
                />
              </div>
              <div className="lock input-style">
                <BiSolidLockAlt />

                <input
                  type="text"
                  name="cpassword"
                  placeholder="Confirm Password"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
              </div>
           <button  onClick={PostData}>Register</button>
            </form>
          </div>
          <div className="right-form">
            <img
              src="https://th.bing.com/th/id/OIP.wBSUpiEHAws8IvtGvst0YgAAAA?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
