import React, { useEffect } from "react";
import "./styles/Home.css";
// import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Home = ({ user, setUser }) => {
  // const [userName, setUserName] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [error, setError] = React.useState("");
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("userItem")) {
  //     setUser(JSON.parse(localStorage.getItem("userItem")));
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return user === null ? (
    <div className="body--container">
      {/* <Navbar /> */}
      <div className="box--container">
        <h1>Please Login / Register to continue !</h1>
        <div className="flex--buttons">
          <Link to="/login">
            <button className="buttonClass">Login</button>
          </Link>
          <Link to="/register">
            <button className="buttonClass">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <div className="body--container">
        <div>
          <h2> Welcome to Employee management Dashboard !</h2>
          <Link to="/employees">
            <button className="buttonClass">Go to Employee Table</button>
          </Link>
          <button className="buttonClass" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
