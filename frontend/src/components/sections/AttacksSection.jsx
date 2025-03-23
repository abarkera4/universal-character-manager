import React from "react";

const AttacksSection = ({ attacks, setAttacks }) => {
  const updateAttack = (index, field, value) => {
    const updated = [...attacks];
    updated[index][field] = value;
    setAttacks(updated);
  };

  const addAttack = () => {
    setAttacks([...attacks, { name: "", attackBonus: 0, damageType: "" }]);
  };

  const removeAttack = (index) => {
    const updated = attacks.filter((_, i) => i !== index);
    setAttacks(updated);
  };

  return (
    <div>
      <h3>Attacks & Spellcasting</h3>
      {attacks.map((attack, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={attack.name}
            placeholder="Name"
            onChange={(e) => updateAttack(index, "name", e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="number"
            value={attack.attackBonus}
            placeholder="Attack Bonus"
            onChange={(e) => updateAttack(index, "attackBonus", parseInt(e.target.value))}
            style={{ width: "120px", marginRight: "10px" }}
          />
          <input
            type="text"
            value={attack.damageType}
            placeholder="Damage / Type"
            onChange={(e) => updateAttack(index, "damageType", e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <button onClick={() => removeAttack(index)}>❌</button>
        </div>
      ))}
      <button onClick={addAttack}>+ Add Attack</button>
    </div>
  );
};

export default AttacksSection;
