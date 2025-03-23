import React from "react";

const CheckboxRow = ({ label, values, onToggle }) => (
  <div style={{ marginBottom: "10px" }}>
    <strong>{label}:</strong>{" "}
    {values.map((checked, index) => (
      <label key={index} style={{ marginRight: "10px" }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(index)}
        />
      </label>
    ))}
  </div>
);

const HealthSection = ({ health, updateHealthField, toggleDeathSave }) => {
  return (
    <div>
      <h3>Health</h3>
      {health.currentHitPoints !== undefined && (
        <div>
          <label>Current HP: </label>
          <input
            type="number"
            value={health.currentHitPoints}
            onChange={(e) => updateHealthField("currentHitPoints", parseInt(e.target.value))}
            style={{ marginBottom: "10px" }}
          />
        </div>
      )}

      {health.temporaryHitPoints !== undefined && (
        <div>
          <label>Temporary HP: </label>
          <input
            type="number"
            value={health.temporaryHitPoints}
            onChange={(e) => updateHealthField("temporaryHitPoints", parseInt(e.target.value))}
            style={{ marginBottom: "10px" }}
          />
        </div>
      )}

      {health.hitDice !== undefined && (
        <div>
          <label>Hit Dice: </label>
          <input
            type="text"
            value={health.hitDice}
            onChange={(e) => updateHealthField("hitDice", e.target.value)}
            style={{ marginBottom: "10px" }}
          />
        </div>
      )}

      {health.deathSaves && (
        <>
          <CheckboxRow
            label="Death Saves - Successes"
            values={health.deathSaves.successes}
            onToggle={(i) => toggleDeathSave("successes", i)}
          />
          <CheckboxRow
            label="Death Saves - Failures"
            values={health.deathSaves.failures}
            onToggle={(i) => toggleDeathSave("failures", i)}
          />
        </>
      )}
    </div>
  );
};

export default HealthSection;
