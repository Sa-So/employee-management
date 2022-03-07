// import "./App.css";
import React, { useState } from "react";
// import { useEffect } from "react";
// import AllEmployees from "./components/AllEmployees";
// imsssport AddEmployee from "./components/AddEmployee";
import AddEmployee from "./components/AddEmployee";
import AllEmployees from "./components/AllEmployees";
// import EditEmployee from "./components/EditEmployee";
import EditEmployee from "./components/EditEmployee";

function App() {
  console.log("hello");
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  function toggleAdd() {
    setAdd(!add);
  }
  function toggleEdit() {
    setEdit(!edit);
  }
  return (
    <div>
      <h1> hello app</h1>
      {add ? <AddEmployee Add={toggleAdd} /> : <AllEmployees />}
      {!add && (
        <button onClick={() => setAdd(!add)}>{add ? "Back" : "Add"}</button>
      )}
      {/* <button onClick={() => setEdit(!edit)}>edit</button> */}
      {edit && <EditEmployee Edit={toggleEdit} />}
    </div>
  );
}

export default App;
