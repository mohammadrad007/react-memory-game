import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import LevelOne from "./components/levelOne/LevelOne";
import LevelThree from "./components/levelThree/LevelThree";
import LevelTwo from "./components/levelTwo/LevelTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/levelone" element={<LevelOne />}></Route>
        <Route path="/leveltwo" element={<LevelTwo />}></Route>
        <Route path="/levelthree" element={<LevelThree />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
