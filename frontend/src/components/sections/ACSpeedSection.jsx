import React from "react";

const ACSpeedSection = ({ values, updateField }) => {
  return (
    <div className="ac-speed">
      <div>
        <label>Armor Class</label>
        <input
          type="number"
          value={values.armorClass}
          onChange={(e) => updateField("armorClass", parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Initiative</label>
        <input
          type="number"
          value={values.initiative}
          onChange={(e) => updateField("initiative", parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Speed</label>
        <input
          type="number"
          value={values.speed}
          onChange={(e) => updateField("speed", parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default ACSpeedSection;
