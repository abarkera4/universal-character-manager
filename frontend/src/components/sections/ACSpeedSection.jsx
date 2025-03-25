import React from "react";

const ACSpeedSection = ({ values, updateField }) => {
  const fields = [
    { field: "armorClass", label: "Armor Class" },
    { field: "initiative", label: "Initiative" },
    { field: "speed", label: "Speed" },
  ];

  return (
    <div className="ac-speed-grid">
      {fields.map(({ field, label }) => (
        <div key={field} className="ac-speed-box">
          <input
            type="number"
            value={values[field]}
            onChange={(e) => updateField(field, parseInt(e.target.value))}
            className="ac-speed-input"
          />
          <label className="ac-speed-label">{label}</label>
        </div>
      ))}
    </div>
  );
};

export default ACSpeedSection;
