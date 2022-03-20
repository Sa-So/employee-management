import React, { useState, useEffect } from "react";
import "./styles/AllEmployees.css";
import { getAllEmployees } from "../api/employees";
import { deleteEmployee } from "../api/employees";
import Navbar from "./Navbar";
import GridEmployees from "./GridEmployees";
import ListEmployees from "./ListEmployees";
import { Button } from "@mui/material";

// App -> AllEmployees -> ListEmployees

export default function AllEmployees(props) {
  //   const [employees, setEmployees] = useState({ name: "pathak", class: "11" });
  const [grid_or_list, setGrid_or_list] = useState("grid");
  console.log("all employee rendered");
  return (
    <div>
      <Navbar />
      <Button onClick={() => setGrid_or_list("list")}>List</Button>
      <Button onClick={() => setGrid_or_list("grid")}>Grid</Button>

      {console.log(grid_or_list)}

      {grid_or_list === "grid" ? (
        // <GridEmployees employees={employees} handleDelete={handleDelete} />
        <GridEmployees />
      ) : (
        // <ListEmployees employees={employees} handleDelete={handleDelete} />
        // <ListEmployees />
        <ListEmployees
          setEditId={(id) => props.setEditId(id)}
          edit={props.toggleEdit}
          deleteId={props.id}
          add={props.add}
          setAdd={props.setAdd}
        />
      )}

      <div className="button--add">
        <button onClick={() => props.setAdd(!props.add)}>
          {props.add ? "Back" : "Add"}
        </button>
      </div>
    </div>
  );
}
