import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DnDCharacterSheet from "./components/DnDCharacterSheet";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import CharacterGenerator from "./components/CharacterGenerator";
import Character from "./components/Characters";
import CharacterSheet from "./components/CharacterSheet";
import CharacterDashboard from "./components/CharacterDashboard";

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
          <Route path="/character" element={<Character />} />
          <Route path="/characterdnd" element={<DnDCharacterSheet />} />
          <Route path="/dashboard" element={<CharacterDashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
