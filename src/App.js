import "./App.css";
import { Whiteapper } from "./Components/Whitepaper";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import {LandingPage} from "./Components/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} /> 
          <Route path="/Whitepaper" element={<Whiteapper />} />
          <Route path="/Home" element={<Home /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
