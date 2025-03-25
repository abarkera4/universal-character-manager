import React from "react";

const SavingThrowsSection = ({ savingThrows, updateSavingThrow }) => {
  return (
    <div className="saving-throws-list">
      
      {Object.entries(savingThrows).map(([stat, value]) => (
        <label key={stat} className="saving-throw-item">
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => updateSavingThrow(stat, e.target.checked)}
          />
          {stat}
        </label>
      ))}
      <h3>SAVING THROWS</h3>
    </div>
  );
};

export default SavingThrowsSection;
