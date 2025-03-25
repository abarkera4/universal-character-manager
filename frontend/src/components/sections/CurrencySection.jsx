import React from "react";

const CurrencySection = ({ currency, updateCurrency }) => {
  return (
    <div>
      <h3>Currency</h3>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {Object.entries(currency).map(([type, value]) => (
          <label key={type}>
            {type}:
            <input
              type="number"
              value={value}
              min={0}
              onChange={(e) => updateCurrency(type, parseInt(e.target.value, 10))}
              style={{ marginLeft: "8px", width: "80px" }}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CurrencySection;
