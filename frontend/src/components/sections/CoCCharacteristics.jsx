import React from "react";

const CoCCharacteristics = ({ stats, updateStat }) => {
  const renderStatBox = (label, value) => {
    const half = Math.floor(value / 2);
    const fifth = Math.floor(value / 5);

    return (
      <div className="coc-stat-box" key={label}>
        <div className="coc-stat-label">{label}</div>
        <div className="coc-stat-inputs">
          <input
            type="number"
            className="coc-stat-main"
            value={value}
            onChange={(e) => updateStat(label, parseInt(e.target.value))}
          />
          <div className="coc-stat-smalls">
            <div className="coc-stat-half">{half}</div>
            <div className="coc-stat-fifth">{fifth}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="characteristics-title">CHARACTERISTICS
      <div className="coc-characteristics-grid">
        {Object.entries(stats).map(([label, value]) =>
          renderStatBox(label, value)
        )}
      </div>
    </div>
  );
};

export default CoCCharacteristics;
