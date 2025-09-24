import { useEffect, useState } from "react";
import { LOGO } from "../util/constant";
import { Link } from "react-router";
import useOnlineStatus from "../util/useOnlineStatus";

// 2️⃣ Header Component
// - Shows a logo
// - Shows navigation menu (Home, About, etc.)

const Header = () => {
  
  const [buttonText, setButtonText] = useState("Login");
  // state variable to access online/offline status from useOnlineStatus custom hook from utils
  const isOnline = useOnlineStatus();
  // state for blinking of emoji
  const [blink, setBlink] = useState(true)
  const handleButtonClick = () => {
    if (buttonText === "Login") {
      setButtonText ("Logout");
    } else {
      setButtonText ("Login");
    }
  };

  // useEffect for blinking of online/offline emoji
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  },[]);
  // useEffect for Login/Logout button
  useEffect(() => {
    
  }, [buttonText]);

  return (
    <div className="header-container">
      <div className="header-logo">
        <img
          alt="logo"
          height="100%"
          width="100%"
          src={LOGO}
          
        />
      </div>
      <ul className="header-nav-items">

        <li>
          Network Status: {isOnline ? (
        <span>
          {blink ? "🟢" : "⚪"} Online
        </span>
      ) : (
        <span>
          {blink ? "🔴" : "⚪"} Offline
        </span>
      )}

        </li>
        <li className="header-nav-item">
           <Link to="/">Home</Link> 
           </li>
        <li className="header-nav-item">
           <Link to="/about">About Us</Link>
           </li>
        <li className="header-nav-item"> 
          <Link to="/contact">Contact Us</Link>
          </li>
        <li className="header-nav-item"> Cart </li>
        <li className="header-nav-item">
          <button
            onClick={handleButtonClick}
            style={{padding: "0.5rem", cursor: "pointer"}}
          >
            {buttonText}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header; 