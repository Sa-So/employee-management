import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const Routing = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    user && JSON.parse(user) ? setUser(user) : setUser(null);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employee" element={<App />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
