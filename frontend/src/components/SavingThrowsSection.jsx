import React from "react";

const SavingThrowsSection = ({ savingThrows, updateSavingThrow }) => {
  return (
    <div>
      <h3>Saving Throws</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {Object.entries(savingThrows).map(([stat, value]) => (
          <label key={stat}>
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => updateSavingThrow(stat, e.target.checked)}
            />
            {stat}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SavingThrowsSection;
