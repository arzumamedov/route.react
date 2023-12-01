import React from "react";
import "./style.css";
import { NavLink} from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <ul className="navItem">
        <li>
          <NavLink
            className={({ isActive }) =>
             isActive ? "active" : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Contact"}>Contact</NavLink>
          <NavLink to={"/Products"}>Products</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
