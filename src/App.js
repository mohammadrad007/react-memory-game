import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import LevelOne from "./components/levelOne/LevelOne";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
