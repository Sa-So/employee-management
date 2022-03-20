import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Login.css";
// import { PropTypes } from "@mui/material";
// import { useContext } from "react";
import { getUser } from "../api/users";
const Login = ({ setUser }) => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    const res = await getUser(userDetails);
    console.log(res);
    if (res.data.length === 0) {
      setError("Invalid Credentials");
    } else {
      setUser(res.data[0]);
      console.log(res.data[0].email);
      localStorage.setItem("user", JSON.stringify(res.data[0]));
      navigate("/employees");
    }
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
      <div className="body--container">
        <div className="box--container">
          <h3>{error}</h3>
          <h2>Login</h2>
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
            <button>Login</button>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
// propTypes: {
//   setUser: PropTypes.func.isRequired,

// };
