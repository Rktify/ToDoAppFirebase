import "./App.css";
import Title from "./components/Title";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component }  from 'react';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Title />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
