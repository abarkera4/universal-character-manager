import React from "react";

const CoCSanitySection = ({ sanity, updateField }) => {
  if (!sanity) return null;

  const handleClick = (val) => {
    updateField("sanity", {
      ...sanity,
      current: val,
    });
  };

  const renderButton = (i) => {
    const value = i.toString().padStart(2, "0");
    const isActive = sanity.current === i;
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
    <div className="coc-sanity-section">
      <div className="coc-sanity-layout">
        
            <div className="coc-sanity-content">
                <div className="coc-sanity-header">
                    <div className="coc-sanity-field">
                        <label>Start</label>
                        <input
                        type="number"
                        value={sanity.start}
                        onChange={(e) =>
                            updateField("sanity", {
                            ...sanity,
                            start: parseInt(e.target.value),
                            })
                        }
                        />
                    </div>

                    <div className="coc-sanity-field">
                        <label>Max</label>
                        <input
                        type="number"
                        value={sanity.max}
                        onChange={(e) =>
                            updateField("sanity", {
                            ...sanity,
                            max: parseInt(e.target.value),
                            })
                        }
                        />
                    </div>
                </div>


                <div className="coc-sanity-track">
                <button
                  className={`coc-sanity-button ${sanity.insane ? "active" : ""}`}
                  onClick={() =>
                    updateField("sanity", {
                      ...sanity,
                      insane: !sanity.insane,
                    })
                  }
                >
                  Insane
                </button>
                    {Array.from({ length: 99 }, (_, i) => {
                    const value = i + 1;
                    const display = value.toString().padStart(2, "0");
                    const isActive = sanity.current === value;
                    return (
                        <button
                        key={value}
                        className={`coc-sanity-button ${isActive ? "active" : ""}`}
                        onClick={() => handleClick(value)}
                        >
                        {display}
                        </button>
                    );
                    })}
                </div>

                <div className="coc-sanity-checks">
                  {[
                    { key: "temporaryInsanity", label: "Temp. Insane" },
                    { key: "indefiniteInsanity", label: "Indef. Insane" },
                  ].map(({ key, label }) => (
                    <label key={key}>
                      <input
                        type="checkbox"
                        checked={sanity[key]}
                        onChange={() =>
                          updateField("sanity", {
                            ...sanity,
                            [key]: !sanity[key],
                          })
                        }
                      />
                      {label}
                    </label>
                  ))}
                </div>

            </div>
      </div>
      <div className="coc-vertical-label-sanity">SANITY</div>
    </div>
  );
};

export default CoCSanitySection;
