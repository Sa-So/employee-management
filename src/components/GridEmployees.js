import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { Paper } from "@mui/material";
// import { makeStyles } from "@material-ui/core/styles";
import { getAllEmployees } from "../api/employees";
import { deleteEmployee } from "../api/employees";

export default function GridEmployees() {
  const [employees, setEmployees] = useState([]);
  console.log("grid rendered");
  useEffect(() => {
    getEmployees();
  }, []);
  const getEmployees = async () => {
    const res = await getAllEmployees();
    setEmployees(res.data);
  };
  return (
    <Container>
      <Grid container spacing={3}>
        {employees.map((employee) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={employee.id}>
            <Paper>
              <h1>{employee.Name}</h1>
              <h3>{employee.Email}</h3>
              <h3>{employee.Phone}</h3>
              <h3>{employee.Dob}</h3>
              <button
                onClick={() => {
                  deleteEmployee(employee.id);
                  getEmployees();
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  console.log("edit", employee.id);
                }}
              >
                Edit
              </button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
