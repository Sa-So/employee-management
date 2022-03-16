import React, { useState, useEffect } from "react";
import "./styles/AllEmployees.css";
import { getAllEmployees } from "../api/employees";
import { deleteEmployee } from "../api/employees";
import Navbar from "./Navbar";

export default function AllEmployees(props) {
  //   const [employees, setEmployees] = useState({ name: "pathak", class: "11" });
  const [employees, setEmployees] = useState([]);
  // const [deleted, setDeleted] = useState(false);

  const handleDelete = (id) => {
    console.log(id);
    // props.handleDelete(id);
    deleteEmployee(id);
    getEmployees();
  };

  const getEmployees = async () => {
    const res = await getAllEmployees();
    setEmployees(res.data);
  };
  useEffect(() => {
    getEmployees();
  }, []);

  console.log(employees);
  return (
    <div>
      <Navbar />
      <h1>all employees </h1>
      <table id="empTable">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Dob</th>
            <th>Functions</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <div className="button--add">
        <button onClick={() => props.setAdd(!props.add)}>
          {props.add ? "Back" : "Add"}
        </button>
      </div>
    </div>
  );
}
