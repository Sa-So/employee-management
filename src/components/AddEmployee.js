// import axios from "axios";
import React from "react";
import { useState } from "react";
import { postEmployees } from "../api/employees";

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
    <form onSubmit={handleSubmit}>
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
          type="text"
          name="Email"
          onChange={handleChange}
          value={employeeData.Email}
        />
      </h3>
      <h3>
        Phone:
        <input
          type="text"
          name="Phone"
          onChange={handleChange}
          value={employeeData.Phone}
        />
      </h3>
      <h3>
        DOB:
        <input
          type="text"
          name="Dob"
          onChange={handleChange}
          value={employeeData.Dob}
        />
      </h3>
      <input type="submit" value="Submit" />
    </form>
  );
}
