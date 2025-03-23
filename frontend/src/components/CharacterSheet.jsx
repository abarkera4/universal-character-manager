import React, { useState, useEffect } from "react";
import cocTemplate from "../templates/cocTemplate.json";
import dndTemplate from "../templates/dndTemplate.json";
import StatsSection from "./StatsSection";
import SkillsSection from "./SkillsSection";
import InventorySection from "./InventorySection";
import TemplateSelector from "./TemplateSelector";
import SavingThrowsSection from "./SavingThrowsSection";
import AttacksSection from "./AttacksSection";
import RoleplayFieldsSection from "./RoleplayFieldsSection";
import CurrencySection from "./CurrencySection";
import HealthSection from "./HealthSection";
import DerivedStatsSection from "./DerivedStatsSection";
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

      const savingThrows = {};
      (template.savingThrows || []).forEach((stat) => {
        savingThrows[stat] = false; 
      });


      const skills = template.defaultSkills.map((skill) => ({ name: skill, value: 0 }));

      let health = {};
      if (template.currentHitPoints) health.currentHitPoints = 0;
      if (template.temporaryHitPoints) health.temporaryHitPoints = 0;
      if (template.hitDice) health.hitDice = "";
      if (template.deathSaves) {
        health.deathSaves = {
          successes: Array(template.deathSaves.successes).fill(false),
          failures: Array(template.deathSaves.failures).fill(false),
        };
      }


      const currency = {};
      (template.currency || []).forEach((type) => {
        currency[type] = 0;
      });


      const extras = {};

      if (template.personalityTraits) extras.personalityTraits = "";
      if (template.goals) extras.goals = "";
      if (template.bonds) extras.bonds = "";
      if (template.flaws) extras.flaws = "";
      if (template.otherProficienciesAndLanguages) extras.otherProficienciesAndLanguages = [];
      if (template.featuresAndTraits) extras.featuresAndTraits = [];


      setCharacter({
        characterName: "New Character",
        gameSystem: selectedSystem,
        level: 1,
        systemAttributes: {
          stats,
          skills,
          inventory: [],
          savingThrows,
          attacksAndSpellcasting: [],
          ...extras,
          currency,
          ...health,
        },
      });
    } else {
      setCharacter(null);
    }
  }, [selectedSystem]);

  console.log("Class applied:", character.gameSystem
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^a-z0-9-]/g, ""))
  

  return (
    <div>
      <h1>Dynamic Character Sheet</h1>

      <TemplateSelector
        selectedSystem={selectedSystem}
        setSelectedSystem={setSelectedSystem}
        options={Object.keys(templates)}
      />

<h3>Game System: {character.gameSystem}</h3>

      {character ? (
        <>
           <div
              className={`character-sheet container mt-5 ${character.gameSystem
                .toLowerCase()
                .replace(/\s/g, "-")
                .replace(/[^a-z0-9-]/g, "")}`}  // Removes & and other special chars
              
            >
              <h2>{character.characterName}</h2>
              

          <DerivedStatsSection
            level={character.level}
            setLevel={(newLevel) =>
              setCharacter((prev) => ({
                ...prev,
                level: newLevel
              }))
            }
            stats={character.systemAttributes.stats}
            skills={character.systemAttributes.skills}
          />

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

          {character.systemAttributes.savingThrows && (
            <SavingThrowsSection
              savingThrows={character.systemAttributes.savingThrows}
              updateSavingThrow={(stat, value) =>
                setCharacter((prev) => ({
                  ...prev,
                  systemAttributes: {
                    ...prev.systemAttributes,
                    savingThrows: {
                      ...prev.systemAttributes.savingThrows,
                      [stat]: value,
                    },
                  },
                }))
              }
            />
          )}


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

          <HealthSection
            health={character.systemAttributes}
            updateHealthField={(field, value) =>
              setCharacter((prev) => ({
                ...prev,
                systemAttributes: {
                  ...prev.systemAttributes,
                  [field]: value,
                },
              }))
            }
            toggleDeathSave={(type, index) => {
              setCharacter((prev) => {
                const updated = [...prev.systemAttributes.deathSaves[type]];
                updated[index] = !updated[index];
                return {
                  ...prev,
                  systemAttributes: {
                    ...prev.systemAttributes,
                    deathSaves: {
                      ...prev.systemAttributes.deathSaves,
                      [type]: updated,
                    },
                  },
                };
              });
            }}
          />


          {character.systemAttributes.attacksAndSpellcasting && (
            <AttacksSection
              attacks={character.systemAttributes.attacksAndSpellcasting}
              setAttacks={(newAttacks) =>
                setCharacter((prev) => ({
                  ...prev,
                  systemAttributes: {
                    ...prev.systemAttributes,
                    attacksAndSpellcasting: newAttacks,
                  },
                }))
              }
            />
          )}

          {character.systemAttributes.currency && (
            <CurrencySection
              currency={character.systemAttributes.currency}
              updateCurrency={(type, value) =>
                setCharacter((prev) => ({
                  ...prev,
                  systemAttributes: {
                    ...prev.systemAttributes,
                    currency: {
                      ...prev.systemAttributes.currency,
                      [type]: value,
                    },
                  },
                }))
              }
            />
          )}

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

          <RoleplayFieldsSection
            attributes={character.systemAttributes}
            updateField={(field, value) =>
              setCharacter((prev) => ({
                ...prev,
                systemAttributes: {
                  ...prev.systemAttributes,
                  [field]: value,
                },
              }))
            }
          />
        </div>
        </>
      ) : (
        <p>Select a system to begin your character sheet.</p>
      )}
    </div>
  );
};

export default CharacterSheet;
