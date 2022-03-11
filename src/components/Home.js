import React from "react";
// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = ({ user }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return user === null ? (
    <div>
      <div>Please Login or Register to continue !</div>
      <Link to="/login">Login</Link>
      <Link to="/register">Signup</Link>
    </div>
  ) : (
    <div>
      <div> Welcome to Employee management Dashboard !</div>
      <Link to="/employees">Go to Employee Table</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
