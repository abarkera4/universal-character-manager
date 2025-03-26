import React, { useState, useEffect } from "react";
import cocTemplate from "../templates/cocTemplate.json";
import dndTemplate from "../templates/dndTemplate.json";
import StatsSection from "./sections/StatsSection";
import SkillsSection from "./sections/SkillsSection";
import InventorySection from "./sections/InventorySection";
import TemplateSelector from "./TemplateSelector";
import SavingThrowsSection from "./sections/SavingThrowsSection";
import AttacksSection from "./sections/AttacksSection";
import RoleplayFieldsSection from "./sections/RoleplayFieldsSection";
import CurrencySection from "./sections/CurrencySection";
import HealthSection from "./sections/HealthSection";
import DerivedStatsSection from "./sections/DerivedStatsSection";
import CharacterHeaderSection from "./sections/CharacterHeaderSection";
import ACSpeedSection from "./sections/ACSpeedSection";
import CoCCharacteristics from "./sections/CoCCharacteristics";
import CoCSanitySection from "./sections/CoCSanitySection";
import CoCHitPointsSection from "./sections/CoCHitPointsSection";
import CoCLuckSection from "./sections/CoCLuckSection";
import CoCMagicPointsSection from "./sections/CoCmagicPointsSection";
import CoCInvestigatorSkillsSection from "./sections/CoCInvestigatorSkillsSection";
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

      const headerFields = {};
      (template.headerFields || []).forEach((field) => {
        if (field === "level") headerFields[field] = 1;
        else if (field === "experiencePoints") headerFields[field] = 0;
        else headerFields[field] = "";
      });


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
      if (template.armorClass) extras.armorClass = 0;
      if (template.initiative) extras.initiative = 0;
      if (template.speed) extras.speed = 0;

      //CoC

      let sanity = null;
      let hitPoints = null;
      let luck = null;
      let magicPoints = null;

      if (selectedSystem === "Call of Cthulhu") {
        sanity = {
          start: 50,
          max: 99,
          current: 50,
          temporaryInsanity: false,
          indefiniteInsanity: false,
          insane: false
        },
        hitPoints = {
          max: 10,
          current: 10,
          majorWound: false,
          dying: false,
          unconscious: false
        },
        luck = {
          value: 50
        },
        magicPoints = {
          current: 10,
          max: 10
        };
      }

      setCharacter({
        gameSystem: selectedSystem,
        ...headerFields,
        systemAttributes: {
          stats,
          skills,
          inventory: [],
          savingThrows,
          attacksAndSpellcasting: [],
          ...extras,
          currency,
          ...health,
          sanity,
          hitPoints,
          luck,
          magicPoints,
        },
      });
      
    } else {
      setCharacter(null);
    }
  }, [selectedSystem]);
  

  return (
    <div className="character-sheet-container ">
      

      <h1>Dynamic Character Sheet</h1>

      <TemplateSelector
        selectedSystem={selectedSystem}
        setSelectedSystem={setSelectedSystem}
        options={Object.keys(templates)}
      />



      {character ? (
        <>
          <div
            className={`character-sheet container mt-5 ${character.gameSystem
              .toLowerCase()
              .replace(/\s/g, "-")
              .replace(/[^a-z0-9-]/g, "")}`} 
              
          >

           {character.gameSystem === "Call of Cthulhu" && (
            <>
              <div className="coc-top-section-grid">

                <div className="coc-top-left">
                  <CharacterHeaderSection
                    character={character}
                    updateField={(field, value) =>
                      setCharacter((prev) => ({
                        ...prev,
                        [field]: value,
                      }))
                    }
                    template={templates[character.gameSystem]}
                  />
                </div>

                <div className="coc-top-center">
                  <CoCCharacteristics
                    stats={character.systemAttributes.stats}
                    updateStat={(key, val) =>
                      setCharacter((prev) => ({
                        ...prev,
                        systemAttributes: {
                          ...prev.systemAttributes,
                          stats: {
                            ...prev.systemAttributes.stats,
                            [key]: val,
                          },
                        },
                      }))
                    }
                  />
                </div>

                <div className="coc-top-right">
                  <div className="coc-image-placeholder">Portrait Goes Here</div>
                </div>
                
              </div>
                
                <div className="coc-middle-section-grid">
                  <div className="coc-hp-wrapper">
                    <div className="coc-middle-row">
                      <CoCHitPointsSection
                        hitPoints={character.systemAttributes.hitPoints}
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

                      <CoCSanitySection
                        sanity={character.systemAttributes.sanity}
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
                  </div>

                    <div className="coc-middle-row">
                    
                      <div className="coc-luck-wrapper">
                        <CoCLuckSection
                          luck={character.systemAttributes.luck}
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

                      <div className="coc-mp-wrapper">
                        <CoCMagicPointsSection
                          magicPoints={character.systemAttributes.magicPoints}
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

                    </div>

                      <div className="coc-skils-wrapper">
                      <CoCInvestigatorSkillsSection
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
                      </div>
                </div>
              </>
            )}


            {character.gameSystem === "Dungeons & Dragons" ? (
            <>
              <div className="dungeons-sheet-header">
                <div className="dungeons-sheet-header-left">

                <h3 className="dungeons-title">{character.gameSystem}</h3>
                  
                <div className="dungeons-header-field">
                    <label>Character Name</label>
                    <input
                      type="text"
                      value={character.characterName}
                      onChange={(e) =>
                        setCharacter({ ...character, characterName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="dungeons-sheet-header-right">
                  {[
                    { label: "Class & Level", field: "classAndLevel" },
                    { label: "Background", field: "background" },
                    { label: "Player Name", field: "playerName" },
                    { label: "Race", field: "race" },
                    { label: "Alignment", field: "alignment" },
                    { label: "Experience Points", field: "experiencePoints", type: "number" },
                  ].map(({ label, field, type = "text" }) => (
                    <div className="dungeons-header-field" key={field}>
                      <label>{label}</label>
                      <input
                        type={type}
                        value={character[field] ?? ""}
                        onChange={(e) =>
                          setCharacter({ ...character, [field]: e.target.value })
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="dungeon-sheet-main">
                <div className="abilities-section">
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

                  <DerivedStatsSection
                    level={character.level}
                    setLevel={(newLevel) =>
                      setCharacter((prev) => ({
                        ...prev,
                        level: newLevel,
                      }))
                    }
                    stats={character.systemAttributes.stats}
                    skills={character.systemAttributes.skills}
                  />
                </div>

                <div className="saving-throws">
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
                  <div className="skills-list">
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
                  </div>
              </div>

                

                <div className="combat-section">
                  <ACSpeedSection
                    values={character.systemAttributes}
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
                  <div className="attacks-spells">

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
                  
                  
                  </div>
                  <div className="equipment">
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
                </div>
                </div>

                <div className="personality-section">
                <div className="proficiencies-languages">
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

                </div>
                
            </div>
            </>
          ) : character.gameSystem !== "Call of Cthulhu" ? (
           
            <>
              <CharacterHeaderSection
              character={character}
              updateField={(field, value) =>
                setCharacter((prev) => ({
                  ...prev,
                  [field]: value,
                }))
              }
              template={templates[character.gameSystem]}
            />


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
            </>
          ) : null} 
          </div>
        </>
      ) : (
        <p>Select a system to begin your character sheet.</p>
      )}
    </div>
  );
};

export default CharacterSheet;
