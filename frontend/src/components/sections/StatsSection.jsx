import React from "react";

const getModifier = (score) => {
  if (isNaN(score)) return 0;
  return Math.floor((score - 10) / 2);
};

const StatsSection = ({ stats, updateStat }) => {
  return (
    <div className="ability-scores-grid">
      {Object.entries(stats).map(([stat, value]) => (
        <div className="ability-score-box">
        <label className="stat-label">{stat}</label>
        <input
          className="score-input"
          type="number"
          value={value}
          onChange={(e) => updateStat(stat, parseInt(e.target.value))}
        />
        <div className="modifier-box">
          {getModifier(value) >= 0 ? "+" : ""}
          {getModifier(value)}
        </div>
      </div>
      
      ))}
    </div>
  );
};

export default StatsSection;
