import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CharacterSheet from "./components/CharacterSheet";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import CharacterGenerator from "./components/CharacterGenerator";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<CharacterGenerator/>} />
          <Route path="/character-sheet" element={<CharacterSheet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
