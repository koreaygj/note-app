import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./layout/Sidebar";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";

function App() {
  return (
    <Router>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
