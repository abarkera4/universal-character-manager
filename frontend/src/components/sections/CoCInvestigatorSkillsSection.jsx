import React from "react";

const CoCInvestigatorSkillsSection = ({ skills, setSkills }) => {
  const updateSkillValue = (index, newValue) => {
    const updated = [...skills];
    updated[index].value = newValue;
    setSkills(updated);
  };

  const updateSkillName = (index, newName) => {
    const updated = [...skills];
    updated[index].name = newName;
    setSkills(updated);
  };

  const updateSkillCheck = (index, checked) => {
    const updated = [...skills];
    updated[index].checked = checked;
    setSkills(updated);
  };

  const addSkill = () => {
    const newSkill = { name: "New Skill", value: 0, checked: false };
    setSkills([...skills, newSkill]);
  };

  return (
    <div className="skills-list">
      <ul>
        {skills.map((skill, index) => {
          const half = Math.floor(skill.value / 2);
          const fifth = Math.floor(skill.value / 5);

          return (
            <li key={index} className="skill-row">
              <input
                type="checkbox"
                checked={skill.checked || false}
                onChange={(e) => updateSkillCheck(index, e.target.checked)}
                style={{ marginLeft: "10px" }}
              />

              <input
                type="text"
                value={skill.name}
                onChange={(e) => updateSkillName(index, e.target.value)}
                placeholder="Skill Name"
                className="investigator-skills-list"
                style={{ flex: 1 }}
              />

              <input
                type="number"
                value={skill.value}
                onChange={(e) => updateSkillValue(index, parseInt(e.target.value, 10) || 0)}
                placeholder="Value"
                className="skill-bonus"
      
              />

              <div className="skill-breakdown">
                <input type="number" readOnly value={half} />
                <input type="number" readOnly value={fifth} />
              </div>
            </li>
          );
        })}
      </ul>

      <button onClick={addSkill}>+ Add Skill</button>
    </div>
  );
};

export default CoCInvestigatorSkillsSection;
