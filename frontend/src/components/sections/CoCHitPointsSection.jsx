import React from "react";

const CoCHitPointsSection = ({ hitPoints, updateField }) => {
  if (!hitPoints) return null;

  const handleClick = (val) => {
    updateField("hitPoints", {
      ...hitPoints,
      current: val,
    });
  };

  const renderHPButton = (i) => {
    const value = i.toString().padStart(2, "0");
    const isActive = hitPoints.current === i;
  
    return (
      <button
        key={i}
        className={`coc-hp-button ${isActive ? "active" : ""}`}
        onClick={() => handleClick(i)}
      >
        {value}
      </button>
    );
  };

  
  return (
    <div className="coc-hp-section">
      <div className="coc-hp-layout">
        <div className="coc-vertical-label">HIT POINTS</div>
            <div className="coc-hp-content">        
                <div className="coc-hp-grid-visual">
                    <div className="coc-hp-top-row">
                        <label>
                        <input
                            type="checkbox"
                            checked={hitPoints.majorWound}
                            onChange={() =>
                            updateField("hitPoints", {
                                ...hitPoints,
                                majorWound: !hitPoints.majorWound,
                            })
                            }
                        />
                        Major Wound
                        </label>

                        <div className="coc-max-hp">
                        <label>Max HP</label>
                        <input
                            type="number"
                            value={hitPoints.max}
                            onChange={(e) =>
                            updateField("hitPoints", {
                                ...hitPoints,
                                max: parseInt(e.target.value),
                            })
                            }
                        />
                        </div>
                    </div>

                    <div className="coc-hp-row labeled-row">
                        <button className="hp-label">Dying</button>
                        {[0, 1, 2].map(renderHPButton)}
                    </div>

                    <div className="coc-hp-row labeled-row">
                        <button className="hp-label">Unconscious</button>
                        {[3, 4, 5].map(renderHPButton)}
                    </div>

                    {[6, 11, 16].map((start) => (
                        <div key={start} className="coc-hp-row">
                        {Array.from({ length: 5 }, (_, i) => renderHPButton(start + i))}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
  );
};

export default CoCHitPointsSection;
