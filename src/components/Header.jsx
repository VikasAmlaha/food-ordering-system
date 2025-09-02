import { LOGO } from "../util/constant"

// 2️⃣ Header Component
// - Shows a logo
// - Shows navigation menu (Home, About, etc.)

const Header = () => {
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
        <li className="header-nav-item"> <a href="">HOME</a></li>
        <li className="header-nav-item"> <a href="">ABOUT</a></li>
        <li className="header-nav-item"> <a href="">CONTACT</a></li>
        <li className="header-nav-item"> <a href="">CART</a></li>
      </ul>
    </div>
  );
};

export default Header; 