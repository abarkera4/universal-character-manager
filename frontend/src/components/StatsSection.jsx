import React from "react";
import EditableField from "./EditableField";

const StatsSection = ({ stats, updateStat }) => {
  return (
    <div>
      <h3>Stats</h3>
      {Object.entries(stats).map(([key, value]) => (
        <EditableField
          key={key}
          label={key}
          value={value}
          onChange={(val) => updateStat(key, val)}
        />
      ))}
    </div>
  );
};

export default StatsSection;
