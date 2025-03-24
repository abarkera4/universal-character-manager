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
    <div className="health-grid">
      {health.currentHitPoints !== undefined && (
        <div className="health-box">
          <input
            type="number"
            className="health-input"
            value={health.currentHitPoints}
            onChange={(e) => updateHealthField("currentHitPoints", parseInt(e.target.value))}
          />
          <label className="health-label">Current HP</label>
        </div>
      )}

      {health.temporaryHitPoints !== undefined && (
        <div className="health-box">
          <input
            type="number"
            className="health-input"
            value={health.temporaryHitPoints}
            onChange={(e) => updateHealthField("temporaryHitPoints", parseInt(e.target.value))}
          />
          <label className="health-label">Temp HP</label>
        </div>
      )}

      {health.hitDice !== undefined && (
        <div className="health-box">
          <input
            type="text"
            className="health-input"
            value={health.hitDice}
            onChange={(e) => updateHealthField("hitDice", e.target.value)}
          />
          <label className="health-label">Hit Dice</label>
        </div>
      )}

      {health.deathSaves && (
        <div className="death-saves">
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
        </div>
      )}
    </div>
  );
};

export default HealthSection;
