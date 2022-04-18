import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SingleCard from "./components/SingleCard";
import "./App.css";
import LevelOne from "./components/levelOne/LevelOne";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>Welcome to React Memory App (RMA)</p>
        <span>if you are ready, then let start game</span>
        <Link to="levelone">go to game</Link>
      </div>
      <Routes>
        <Route path="/"></Route>
        <Route path="/levelone" element={<LevelOne />}></Route>
        {/* <Route path="/users">
            <Users />
          </Route>
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
