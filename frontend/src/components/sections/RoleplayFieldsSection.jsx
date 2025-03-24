import React from "react";

const RoleplayFieldsSection = ({ attributes, updateField }) => {
  const renderTextarea = (key, label) => (
    <div key={key} style={{ marginBottom: "15px" }}>
      <label><strong>{label}</strong></label><br />
      <textarea
        rows={3}
        style={{ width: "100%" }}
        value={attributes[key]}
        onChange={(e) => updateField(key, e.target.value)}
      />
    </div>
  );

  const renderTodoList = (key, label) => (
    <div key={key} style={{ marginBottom: "15px" }}>
      <label><strong>{label}</strong></label>
      <ul>
        {attributes[key].map((item, idx) => (
          <li key={idx}>
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const updated = [...attributes[key]];
                updated[idx] = e.target.value;
                updateField(key, updated);
              }}
              style={{ width: "90%" }}
            />
            <button onClick={() => {
              const updated = attributes[key].filter((_, i) => i !== idx);
              updateField(key, updated);
            }}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={() => updateField(key, [...attributes[key], ""])}>+ Add</button>
    </div>
  );

  return (
    <div>
      <h3>Background & Roleplay</h3>
      {attributes.personalityTraits !== undefined && renderTextarea("personalityTraits", "Personality Traits")}
      {attributes.goals !== undefined && renderTextarea("goals", "Goals")}
      {attributes.bonds !== undefined && renderTextarea("bonds", "Bonds")}
      {attributes.flaws !== undefined && renderTextarea("flaws", "Flaws")}
      {attributes.otherProficienciesAndLanguages !== undefined && renderTodoList("otherProficienciesAndLanguages", "Other Proficiencies & Languages")}
      {attributes.featuresAndTraits !== undefined && renderTodoList("featuresAndTraits", "Features & Traits")}
    </div>
  );
};

export default RoleplayFieldsSection;
