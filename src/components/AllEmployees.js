import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// export default function AllEmployees(props) {

// }
import { getAllEmployees } from "../api/employees";
// import api from "../api/employees";

export default function AllEmployees(props) {
  //   const [employees, setEmployees] = useState({ name: "pathak", class: "11" });
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const res = await getAllEmployees();
    setEmployees(res.data);
  };
  //   const handleDelete = async (id) => {
  //     await deleteEmployees(id);
  //     getEmployees();
  //   };
  //   const handleUpdate = async (id, employeeData) => {
  //     await updateEmployees(id, employeeData);
  //     getEmployees();
  //   };

  useEffect(() => {
    getEmployees();
    // setEmployees(getAllEmployees());
  }, []);
  //   console.log(JSON.parse(employees.data));
  console.log(employees);
  return (
    <div>
      <h1>all employees </h1>
      <div
        // key={employee.id}
        style={{
          display: "flex",
          //   marginRight: "10px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h4>id</h4>
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Phone</h4>
        <h4>Dob</h4>
        <h4>Functions</h4>
      </div>

      {employees.map((employee) => (
        <div
          key={employee.id}
          style={{
            display: "flex",
            // marginRight: "10px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h4>{employee.id}</h4>
          <h4>{employee.Name}</h4>
          <h4>{employee.Email}</h4>
          <h4>{employee.Phone}</h4>
          <h4>{employee.Dob}</h4>
          {/* <h4>
            <button onClick={handleDelete}>Delete</button>{" "}
            <button onClick={handleUpdate}>Update</button>{" "}
          </h4> */}
        </div>
      ))}
    </div>
  );
}
