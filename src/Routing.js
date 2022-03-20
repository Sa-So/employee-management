import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";
// import { useNavigate } from "react-router-dom";

const Routing = () => {
  const [user, setUser] = useState(null);
  // change to context api

  useEffect(() => {
    const user = localStorage.getItem("user");
    // user && JSON.parse(user) ? setUser(user) : setUser(null);
    user ? setUser(JSON.parse(user)) : setUser(null);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />

          {/* protected routes */}
          {/* <Route element={<RequireAuth />}> */}
          <Route path="/employees" element={<App />} />
          {/* </Route> */}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
