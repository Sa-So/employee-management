import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setUser }) => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    // e.preventDefault();
    setUser(userDetails);
    // window.location.reload();
    navigate("/employees");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form__login">
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={userDetails.email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userDetails.password}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Login;
