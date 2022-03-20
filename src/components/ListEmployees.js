import React from "react";
import { useEffect, useState } from "react";
import { deleteEmployee } from "../api/employees";
import { getAllEmployees } from "../api/employees";

const ListEmployees = (props) => {
  const [employees, setEmployees] = useState([]);
  console.log("list rendered");
  const handleDelete = (id) => {
    console.log(id);
    // props.handleDelete(id);
    deleteEmployee(id);
    getEmployees();
  };
  //   const handleUpdate = (id) => {
  //     console.log(id);
  //     // props.handleUpdate(id);
  //     setIdToEdit(id);
  //     setEdit(true);
  //     };

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
      <div>
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
      </div>
    </div>
  );
};

export default ListEmployees;
