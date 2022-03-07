// import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { updateEmployee } from "../api/employees";
import { getEmployee } from "../api/employees";

export default function EditEmployee(props) {
  const [employeeData, setEmployeeData] = useState({
    id: "",
    Name: "",
    Email: "",
    Phone: "",
    Dob: "",
  });
  //   const [id, setId] = useState(props.match.params.id);
  const [id, setId] = useState(props.Id);

  const getEmployeeById = async (id) => {
    const res = await getEmployee(id);
    setEmployeeData(res.data);
  };
  useEffect(() => {
    getEmployeeById(id);
  }, [id]);
  //   }, []);

  function handleSubmit(event) {
    // event.preventDefault();
    updateEmployee(id, employeeData);
    // props.Add();
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
      <h1>Edit Employee</h1>
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
      <input type="submit" value="Submit" />
    </form>
  );
}
