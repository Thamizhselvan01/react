import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Singup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<Singup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
