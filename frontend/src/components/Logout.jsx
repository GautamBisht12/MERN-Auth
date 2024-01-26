// Logout.js
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    localStorage.removeItem("token");
    
    
    navigate("/signin");
  }, [navigate]);

  return (
    <div>
      
    </div>
  );
};

export default Logout;
