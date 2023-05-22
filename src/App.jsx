import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import Main from "./views/Main";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
