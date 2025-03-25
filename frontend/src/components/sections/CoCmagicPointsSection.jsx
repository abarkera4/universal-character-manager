import React from "react";

const CoCMagicPointsSection = ({ magicPoints, updateField }) => {
  if (!magicPoints) return null;

  const handleClick = (val) => {
    updateField("magicPoints", {
      ...magicPoints,
      current: val,
    });
  };

  return (
    <div className="coc-mp-section">
      <div className="coc-mp-layout">
        
        <div className="coc-mp-content">

      <div className="coc-mp-max">
        <label>Max</label>
        <input
          type="number"
          value={magicPoints.max}
          onChange={(e) =>
            updateField("magicPoints", {
              ...magicPoints,
              max: parseInt(e.target.value),
            })
          }
        />
      </div>

      <div className="coc-mp-track">
        {Array.from({ length: 25 }, (_, i) => {
          const value = i;
          const display = value.toString().padStart(2, "0");
          const isActive = magicPoints.current === value;

          return (
            <button
              key={value}
              className={`coc-mp-button ${isActive ? "active" : ""}`}
              onClick={() => handleClick(value)}
            >
              {display}
            </button>
          );
        })}
      </div>
      </div>
      <div className="coc-vertical-label-mp">MAGIC POINTS</div>
      </div>
      
    </div>
  );
};

export default CoCMagicPointsSection;
