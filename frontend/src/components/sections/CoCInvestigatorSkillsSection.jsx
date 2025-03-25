import React from "react";
import EditableField from "../EditableField";

const CoCInvestigatorSkillsSection = ({ skills, setSkills }) => {
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
      
      <ul>
  {skills.map((skill, index) => (
    <li key={index} style={{ marginBottom: "5px", display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={skill.checked || false}
        onChange={(e) => {
          const updated = [...skills];
          updated[index].checked = e.target.checked;
          setSkills(updated);
        }}
        style={{ marginRight: "10px" }}
      />

      <input
        type="number"
        value={skill.value}
        onChange={(e) => updateSkill(index, parseInt(e.target.value, 10))}
        placeholder="Value"
        className="skill-bonus"
        style={{ marginRight: "10px" }}
      />


      <input
        type="text"
        value={skill.name}
        onChange={(e) => updateSkillName(index, e.target.value)}
        placeholder="Skill Name"
        className="dungeon-skills-list"
        style={{ flex: 1 }}
      />
    </li>
  ))}
</ul>

      <button onClick={addSkill}>+ Add Skill</button>

    </div>
  );
};

export default CoCInvestigatorSkillsSection;
