// import "./App.css";
import React, { useState } from "react";
// import { useEffect } from "react";
// import AllEmployees from "./components/AllEmployees";
// imsssport AddEmployee from "./components/AddEmployee";
import AddEmployee from "./components/AddEmployee";
import AllEmployees from "./components/AllEmployees";
// import EditEmployee from "./components/EditEmployee";
import EditEmployee from "./components/EditEmployee";
import { deleteEmployee } from "./api/employees";

function App() {
  console.log("hello");
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [id, setId] = useState(0);
  function toggleAdd() {
    setAdd(!add);
  }
  function toggleEdit() {
    // setAdd(false);

    // setEdit(!edit);
    setEdit(!edit);
    setAdd(false);
  }
  function setIdToEdit(id) {
    setId(id);
  }
  // function deleteEmployee(id) {
  //   console.log(id);
  //   // const newEmployees = employees.filter((employee) => employee.id !== id);
  //   // setEmployees(newEmployees);
  //   const
  // }

  // function handleEdit(){

  // }
  function deleteEmployeeById(id) {
    deleteEmployee(id);
    window.location.reload();
  }

  return (
    <div>
      <h1> hello app</h1>
      {add ? (
        <AddEmployee Add={toggleAdd} />
      ) : edit ? (
        <EditEmployee Id={id} edit={toggleEdit} />
      ) : (
        <AllEmployees
          setEditId={setIdToEdit}
          edit={toggleEdit}
          handleDelete={(id) => deleteEmployeeById(id)}
        />
      )}
      {!add && (
        <button onClick={() => setAdd(!add)}>{add ? "Back" : "Add"}</button>
      )}
    </div>
  );
}

export default App;
