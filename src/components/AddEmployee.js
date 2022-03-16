// import axios from "axios";
import React from "react";
import { useState } from "react";
import { postEmployees } from "../api/employees";
import "./styles/AddEmployee.css";
import Navbar from "./Navbar";

export default function AddEmployee(props) {
  const [employeeData, setEmployeeData] = useState({
    id: "",
    Name: "",
    Email: "",
    Phone: "",
    Dob: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    postEmployees(employeeData);
    props.Add();
    // props.add(false);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setEmployeeData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <Navbar />
      <button onClick={() => props.setAdd(!props.add)}>Back</button>
      <form onSubmit={handleSubmit}>
        <div className="body--container">
          <div className="box--container">
            <h1>Add Employee</h1>

            <h3>
              Name:
              <input
                type="text"
                name="Name"
                onChange={handleChange}
                value={employeeData.Name}
              />
            </h3>
            <h3>
              Email:
              <input
                type="email"
                name="Email"
                onChange={handleChange}
                value={employeeData.Email}
              />
            </h3>
            <h3>
              Phone:
              <input
                type="phone"
                name="Phone"
                onChange={handleChange}
                value={employeeData.Phone}
              />
            </h3>
            <h3>
              DOB:
              <input
                type="date"
                name="Dob"
                onChange={handleChange}
                value={employeeData.Dob}
              />
            </h3>

            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
