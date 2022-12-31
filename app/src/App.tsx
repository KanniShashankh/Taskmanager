import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view_models/Home"
import NewTask from './view_models/NewTask';
import EditTask from './view_models/EditTask';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/NewTask" element={<NewTask />}/>
        <Route path="/EditTask" element={<EditTask/>}/>
      </Routes>
    </Router>
  );
}

export default App;
