import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DnDCharacterSheet from "./components/DnDCharacterSheet";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import CharacterGenerator from "./components/CharacterGenerator";
import Character from "./components/Characters";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<CharacterGenerator/>} />
          <Route path="/character-sheet" element={<DnDCharacterSheet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
