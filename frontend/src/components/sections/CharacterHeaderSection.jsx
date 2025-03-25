const fieldLabels = {
  characterName: "Character Name",
  playerName: "Player Name",
  background: "Background",
  race: "Race",
  alignment: "Alignment",
  level: "Level",
  experiencePoints: "Experience Points",
  occupation: "Occupation",
  age: "Age",
  sex: "Sex",
  residence: "Residence",
  birthplace: "Birthplace",
  name: "Name",
  player: "Player",
  classAndLevel: "Class & Level",
};

const fieldTypes = {
  level: "number",
  experiencePoints: "number",
  age: "number",
};

const CharacterHeaderSection = ({ character, updateField, template }) => {
  const isDnD = character.gameSystem === "Dungeons & Dragons";
  const isCoC = character.gameSystem === "Call of Cthulhu";

  const fields = (template.headerFields || []).map((key) => ({
    key,
    label: fieldLabels[key] || key,
    type: fieldTypes[key] || "text",
  }));

  return (
    <>
      {isDnD ? (
        <div className="box">
          <h3 className="title is-5">Character Information</h3>
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <label className="label">Character Name</label>
              <input
                className="input is-small"
                value={character.characterName}
                onChange={(e) => updateField("characterName", e.target.value)}
              />
            </div>
            <div className="column is-one-third">
              <label className="label">Class & Level</label>
              <input
                className="input is-small"
                value={character.classAndLevel}
                onChange={(e) => updateField("classAndLevel", e.target.value)}
              />
            </div>
            <div className="column is-one-third">
              <label className="label">Background</label>
              <input
                className="input is-small"
                value={character.background}
                onChange={(e) => updateField("background", e.target.value)}
              />
            </div>

            <div className="column is-one-third">
              <label className="label">Player Name</label>
              <input
                className="input is-small"
                value={character.playerName}
                onChange={(e) => updateField("playerName", e.target.value)}
              />
            </div>
            <div className="column is-one-third">
              <label className="label">Race</label>
              <input
                className="input is-small"
                value={character.race}
                onChange={(e) => updateField("race", e.target.value)}
              />
            </div>
            <div className="column is-one-third">
              <label className="label">Alignment</label>
              <input
                className="input is-small"
                value={character.alignment}
                onChange={(e) => updateField("alignment", e.target.value)}
              />
            </div>

            <div className="column is-full">
              <label className="label">Experience Points</label>
              <input
                className="input is-small"
                type="number"
                value={character.experiencePoints}
                onChange={(e) =>
                  updateField("experiencePoints", parseInt(e.target.value))
                }
              />
            </div>
          </div>
        </div>
      ) : isCoC ? (
    
          
        <div className="call-of-cthulhu-header">
          <div className="coc-header-grid">
          <h3 className="coc-title">1920S ERA INVESTIGATOR</h3>
            {fields.map(({ key, label, type }) => {
              if (key === "age" || key === "sex") return null;
      
              return (
                <div key={key} className="coc-header-field">
                  <label className="coc-label">{label}</label>
                  <input
                    className="coc-input"
                    type={type}
                    value={character[key] ?? ""}
                    onChange={(e) =>
                      updateField(key, type === "number" ? parseInt(e.target.value) : e.target.value)
                    }
                  />
                </div>
              );
            })}
      
            <div className="coc-header-row">
              {["age", "sex"].map((key) => (
                <div key={key} className="coc-header-field small">
                  <label className="coc-label">{fieldLabels[key]}</label>
                  <input
                    className="coc-input"
                    type={fieldTypes[key] || "text"}
                    value={character[key] ?? ""}
                    onChange={(e) =>
                      updateField(key, fieldTypes[key] === "number" ? parseInt(e.target.value) : e.target.value)
                    }
                  />
                </div>
                
              ))}
            </div>
          </div>
        </div>

      ) : (
        // fallback layout
        <div className="box">
          <h3 className="title is-5">Character Info</h3>
          <div className="columns is-multiline">
            {fields.map(({ key, label, type }) => (
              <div className="column is-one-third" key={key}>
                <label className="label">{label}</label>
                <input
                  className="input is-small"
                  type={type}
                  value={character[key] ?? ""}
                  onChange={(e) =>
                    updateField(
                      key,
                      type === "number"
                        ? parseInt(e.target.value)
                        : e.target.value
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterHeaderSection;
