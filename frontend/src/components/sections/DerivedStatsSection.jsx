const DerivedStatsSection = ({ level, setLevel, stats, skills }) => {
    const getProficiencyBonus = (level) => {
      if (level >= 17) return 6;
      if (level >= 13) return 5;
      if (level >= 9) return 4;
      if (level >= 5) return 3;
      return 2;
    };
  
    const getModifier = (score) => Math.floor((score - 10) / 2);
    const proficiencyBonus = getProficiencyBonus(level);
    const wisMod = getModifier(stats?.Wisdom || 10);
  
    const isProficientInPerception = skills?.some(
      (skill) => skill.name.toLowerCase() === "perception" && skill.value > 0
    );
  
    const passiveWisdom = 10 + wisMod + (isProficientInPerception ? proficiencyBonus : 0);
  
    return (
      <div>
        <h3>Derived Stats</h3>
        <p><strong>Proficiency Bonus:</strong> +{proficiencyBonus}</p>
        <p><strong>Passive Wisdom (Perception):</strong> {passiveWisdom}</p>
      </div>
    );
  };

  export default DerivedStatsSection;

  