import React from "react";
import Sidebar from "../components/Sidebar";
// import Nav from "../components/Nav"; // make a new Higher Order Component (HOC) for Nav
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      <LoginForm />
      {/* <h1>Login Page</h1> */}
    </>
  );
};

export default Login;
