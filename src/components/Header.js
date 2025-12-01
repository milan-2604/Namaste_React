import { COMPANY_LOGO } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src={COMPANY_LOGO}
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;