import React, { useState, useEffect } from "react";
import "./AllEmployees.css";
import { getAllEmployees } from "../api/employees";

export default function AllEmployees(props) {
  //   const [employees, setEmployees] = useState({ name: "pathak", class: "11" });
  const [employees, setEmployees] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const handleDelete = (id) => {
    console.log(id);
    props.handleDelete(id);
    setDeleted(!deleted);
  };

  const getEmployees = async () => {
    const res = await getAllEmployees();
    setEmployees(res.data);
  };
  useEffect(() => {
    getEmployees();
  }, [deleted]);

  console.log(employees);
  return (
    <div>
      <h1>all employees </h1>
      <table id="empTable">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Dob</th>
          <th>Functions</th>
        </tr>

        {employees.map((employee) => (
          <tr key={employee.id}>
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

              <button
                onClick={() => {
                  // props.setDeleteId(employee.id);
                  handleDelete(employee.id);
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
