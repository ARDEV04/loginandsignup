import React from "react";
import "./Shifter.css";
import { NavLink } from "react-router-dom";

const Shifter = () => {
  return (
    <div className="shifter">
      <div className="heading">
        <h1>HR MANAGEMENT SYSTEM</h1>
      </div>
      <div className="menu_icon">
        <div className="changer">
          <NavLink
            className={(e) => {
              return e.isActive ? "now" : "";
            }}
            to="/Login"
          >
            {" "}
            <span>Login</span>
            <i class="fa-solid fa-right-to-bracket"></i>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "now" : "";
            }}
            to="/Signup"
          >
            <span>Sign Up</span>
            <i class="fa-solid fa-user-plus"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Shifter;
