import { useState } from "react";

function CharacterSheet() {
  const [character, setCharacter] = useState({
    name: "",
    class: "",
    level: 1,
    stats: {
      strength: 10,
      dexterity: 10,
      intelligence: 10,
    },
  });

  return (
    <div className="box">
      <h1 className="title">Character Sheet</h1>
      <div className="field">
        <label className="label">Name</label>
        <input
          className="input"
          type="text"
          value={character.name}
          onChange={(e) =>
            setCharacter({ ...character, name: e.target.value })
          }
        />
      </div>
      <div className="field">
        <label className="label">Class</label>
        <input
          className="input"
          type="text"
          value={character.class}
          onChange={(e) =>
            setCharacter({ ...character, class: e.target.value })
          }
        />
      </div>
      <div className="field">
        <label className="label">Level</label>
        <input
          className="input"
          type="number"
          value={character.level}
          onChange={(e) =>
            setCharacter({ ...character, level: Number(e.target.value) })
          }
        />
      </div>
      <button className="button is-success">Save Character</button>
    </div>
  );
}

export default CharacterSheet;
