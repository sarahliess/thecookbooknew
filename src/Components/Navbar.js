import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="NavContainer">
      <div className="NavLeft">
        <p className="thin">THE</p>
        <p className="bold">COOKBOOK</p>
      </div>
      <div className="NavRight">
        <ul>
          <NavLink className="NavLink" to="/">
            HOME
          </NavLink>
          <NavLink className="NavLink" to="/about">
            ABOUT
          </NavLink>
          <NavLink className="NavLink" to="/recipes">
            RECIPES
          </NavLink>
          <NavLink className="NavLink" to="/">
            CONTACT
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
