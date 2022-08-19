import { NavLink } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <div class="topnav">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </>
  );
};

export default Nav;
