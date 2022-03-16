import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <img
          src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
          style={{ height: "50px" }}
          alt="todo-logo"
        />
        <div className="nav-items">
          <Link to="/employees">Employee Table</Link>
          <Link to="/">Home</Link>
          {localStorage.getItem("user") ? (
            <Link to="/login" onClick={() => localStorage.removeItem("user")}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
