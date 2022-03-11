// import "./App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import AllEmployees from "./components/AllEmployees";
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
    setEdit(!edit);
    setAdd(false);
  }
  function setIdToEdit(id) {
    setId(id);
  }
  let navigate = useNavigate();

  function deleteEmployeeById(id) {
    deleteEmployee(id);
    navigate("/employees");
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
          deleteId={id}
        />
      )}
      {!add && (
        <button onClick={() => setAdd(!add)}>{add ? "Back" : "Add"}</button>
      )}
    </div>
  );
}

export default App;
