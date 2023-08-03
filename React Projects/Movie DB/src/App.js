import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/movies/:id' element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
