import React from "react";
import EditableField from "./EditableField";

const SkillsSection = ({ skills, setSkills }) => {
  const updateSkill = (index, value) => {
    const updated = [...skills];
    updated[index].value = value;
    setSkills(updated);
  };

  const addSkill = () => {
    const newSkill = { name: "New Skill", value: 0 };
    setSkills([...skills, newSkill]);
  };

  const updateSkillName = (index, newName) => {
    const updated = [...skills];
    updated[index].name = newName;
    setSkills(updated);
  };

  const removeSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  return (
    <div>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={skill.name}
              onChange={(e) => updateSkillName(index, e.target.value)}
              placeholder="Skill Name"
              style={{ marginRight: "10px" }}
            />
            <input
              type="number"
              value={skill.value}
              onChange={(e) => updateSkill(index, parseInt(e.target.value, 10))}
              placeholder="Value"
              style={{ width: "60px", marginRight: "10px" }}
            />
            <button onClick={() => removeSkill(index)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={addSkill}>+ Add Skill</button>
    </div>
  );
};

export default SkillsSection;
