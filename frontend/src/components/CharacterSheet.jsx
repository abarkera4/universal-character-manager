import React, { useState, useEffect } from "react";
import cocTemplate from "../templates/cocTemplate.json";
import dndTemplate from "../templates/dndTemplate.json";
import StatsSection from "./StatsSection";
import SkillsSection from "./SkillsSection";
import InventorySection from "./InventorySection";
import TemplateSelector from "./TemplateSelector";
import "../styles/CharacterSheet.css"

const templates = {
  "Call of Cthulhu": cocTemplate,
  "Dungeons & Dragons": dndTemplate,
};

const CharacterSheet = () => {
  const [selectedSystem, setSelectedSystem] = useState("");
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (selectedSystem) {
      const template = templates[selectedSystem];

      const stats = {};
      template.stats.forEach((stat) => (stats[stat] = 0));

      const skills = template.defaultSkills.map((skill) => ({ name: skill, value: 0 }));

      setCharacter({
        characterName: "New Character",
        gameSystem: selectedSystem,
        systemAttributes: {
          stats,
          skills,
          inventory: [],
        },
      });
    } else {
      setCharacter(null);
    }
  }, [selectedSystem]);

  return (
    <div>
      <h1>Dynamic Character Sheet</h1>

      <TemplateSelector
        selectedSystem={selectedSystem}
        setSelectedSystem={setSelectedSystem}
        options={Object.keys(templates)}
      />

      {character ? (
        <>
          <h2>{character.characterName}</h2>
          <h3>Game System: {character.gameSystem}</h3>

          <StatsSection
            stats={character.systemAttributes.stats}
            updateStat={(stat, val) =>
              setCharacter((prev) => ({
                ...prev,
                systemAttributes: {
                  ...prev.systemAttributes,
                  stats: {
                    ...prev.systemAttributes.stats,
                    [stat]: val,
                  },
                },
              }))
            }
          />

          <SkillsSection
            skills={character.systemAttributes.skills}
            setSkills={(newSkills) =>
              setCharacter((prev) => ({
                ...prev,
                systemAttributes: {
                  ...prev.systemAttributes,
                  skills: newSkills,
                },
              }))
            }
          />

          <InventorySection
            inventory={character.systemAttributes.inventory}
            setInventory={(newInventory) =>
              setCharacter((prev) => ({
                ...prev,
                systemAttributes: {
                  ...prev.systemAttributes,
                  inventory: newInventory,
                },
              }))
            }
          />
        </>
      ) : (
        <p>Select a system to begin your character sheet.</p>
      )}
    </div>
  );
};

export default CharacterSheet;
