import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import DefaultTemplate from "./components/DefaultTemplate";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, JobPortal, Login, Register } from "./pages";

function App() {
  return (
    <div className="App bg-dark">
      <DefaultTemplate>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/jobs" Component={JobPortal} />
          </Routes>
        </Router>
      </DefaultTemplate>
    </div>
  );
}

export default App;
