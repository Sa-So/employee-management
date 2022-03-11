import React, { useState, useEffect } from "react";
import "./AllEmployees.css";
import { getAllEmployees } from "../api/employees";
// import { useNavigate } from "react-router-dom";

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
  }, [employees]);
  //   console.log(JSON.parse(employees.data));
  console.log(employees);
  return (
    <div>
      <h1>all employees </h1>
      <table id="empTable">
        <tr
        // key={employee.id}
        // style={{
        //   display: "flex",
        //   //   marginRight: "10px",
        //   justifyContent: "space-around",
        //   alignItems: "center",
        // }}
        >
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Dob</th>
          <th>Functions</th>
        </tr>

        {employees.map((employee) => (
          <tr
            key={employee.id}
            // style={{
            //   display: "flex",
            //   // marginRight: "10px",
            //   justifyContent: "space-around",
            //   alignItems: "center",
            // }}
          >
            <td>{employee.id}</td>
            <td>{employee.Name}</td>
            <td>{employee.Email}</td>
            <td>{employee.Phone}</td>
            <td>{employee.Dob}</td>
            <td>
              <button
                onClick={() => {
                  props.setEditId(employee.id);
                  props.edit();
                }}
              >
                Edit
              </button>
              {/* </td> */}

              {/* <td> */}
              <button
                onClick={() => {
                  // props.setDeleteId(employee.id);
                  props.handleDelete(employee.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
