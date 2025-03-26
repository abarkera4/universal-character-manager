import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CharacterGenerator from "./components/CharacterGenerator";
import Character from "./components/Characters";
import CharacterSheet from "./components/CharacterSheet";
import CharacterDashboard from "./components/CharacterDashboard";
import Navbar from "./components/Navbar"

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<CharacterGenerator/>} />
          <Route path="/character-sheet" element={<CharacterSheet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/character" element={<Character />} />
          <Route path="/dashboard" element={<CharacterDashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
