import React from "react";
import { useState } from "react";
import { postUser } from "../api/users";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    postUser(userData);
    navigate("/login");
    // postEmployees(employeeData);
    // props.Add();
  };
  return (
    <div>
      <div className="body--container">
        <div className="box--container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
            <label>
              Password:
              <input type="password" name="password" onChange={handleChange} />
            </label>
            {/* <input type="submit" value="Submit" />
             */}
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
