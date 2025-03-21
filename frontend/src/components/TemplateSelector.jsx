import React from "react";

const TemplateSelector = ({ selectedSystem, setSelectedSystem, options }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Choose a Game System: </label>
      <select value={selectedSystem} onChange={(e) => setSelectedSystem(e.target.value)}>
        <option value="">-- Select --</option>
        {options.map((sys) => (
          <option key={sys} value={sys}>
            {sys}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemplateSelector;
