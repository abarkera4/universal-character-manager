import React from "react";

const CoCLuckSection = ({ luck, updateField }) => {
  if (!luck) return null;

  const handleClick = (val) => {
    updateField("luck", { ...luck, value: val });
  };

  return (
    <div className="coc-luck-section">
      <div className="coc-luck-layout">
        <div className="coc-vertical-label-luck">LUCK</div>
        <div className="coc-luck-content">

      <div className="coc-luck-track">
      <button className="coc-luck-caption">Out of Luck</button>
        {Array.from({ length: 99 }, (_, i) => {
          const value = (i + 1).toString().padStart(2, "0");
          const isActive = luck.value === i + 1;
          return (
            <button
              key={i}
              className={`coc-luck-button ${isActive ? "active" : ""}`}
              onClick={() => handleClick(i + 1)}
            >
              {value}
            </button>
          );
        })}
      </div>

      
      </div>
      </div>
    </div>
  );
};

export default CoCLuckSection;
