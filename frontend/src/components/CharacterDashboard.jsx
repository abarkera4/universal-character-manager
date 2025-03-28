import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CharacterHeaderSection from './sections/CharacterHeaderSection';
import StatsSection from './sections/StatsSection';
import SkillsSection from './sections/SkillsSection';
import ACSpeedSection from './sections/ACSpeedSection';
import HealthSection from './sections/HealthSection';
import AttacksSection from './sections/AttacksSection';
import InventorySection from './sections/InventorySection';
import RoleplayFieldsSection from './sections/RoleplayFieldsSection';
import CharacterSheet from './CharacterSheet';

import { fieldLabels } from './constants/characterFields';

const mockCharacters = [
  {
    id: 1,
    name: 'Kael the Brave',
    gameSystem: 'Dungeons & Dragons',
    logo: '/logos/D&D.jpg',
    stats: {
      STR: 15,
      DEX: 14,
      CON: 13,
      INT: 10,
      WIS: 12,
      CHA: 8,
    },
    skills: [
      { name: 'Acrobatics', value: 2, checked: false },
      { name: 'Athletics', value: 3, checked: false },
    ],
    acSpeed: {
      armorClass: 16,
      initiative: 2,
      speed: 30,
    },
    health: {
      currentHitPoints: 30,
      temporaryHitPoints: 5,
      hitDice: '3d8',
      deathSaves: {
        successes: [false, false, false],
        failures: [false, false, false],
      },
      attacks: [
        { name: "Longsword", attackBonus: 5, damageType: "1d8 slashing" },
        { name: "Shortbow", attackBonus: 4, damageType: "1d6 piercing" },
      ],
    },
    inventory: [
      { name: 'Rations (1 day)', quantity: 5 },
      { name: 'Torch', quantity: 3 },
    ],
    roleplay: {
      personalityTraits: "Kael is brave but headstrong...",
      goals: "Defeat the dragon terrorizing his village",
      bonds: "Has a bond with an ancient sword passed down in his family",
      flaws: "Reckless if honor is challenged",
      otherProficienciesAndLanguages: ["Elvish", "Orcish"],
      featuresAndTraits: ["Darkvision", "Fighting Style: Protection"]
    },
  },
  {
    id: 2,
    name: 'Agent Nova',
    gameSystem: 'Cyberpunk',
    logo: '/logos/cyberpunk.png',
    stats: {
      STR: 6,
      REF: 8,
      INT: 5,
    },
    skills: [{ name: 'Hacking', value: 5, checked: true }],
    acSpeed: {
      armorClass: 10,
      initiative: 0,
      speed: 12,
    },
    health: {
      currentHitPoints: 20,
      temporaryHitPoints: 0,
      hitDice: '3d6', 
      deathSaves: {
        successes: [false, false, false],
        failures: [false, false, false],
      },
    },
    attacks: [],
    inventory: [],
    roleplay: {
      personalityTraits: "Calculating, methodical",
      goals: "Expose megacorp corruption",
      bonds: "",
      flaws: "",
      otherProficienciesAndLanguages: [],
      featuresAndTraits: []
    },
  },
];

export default function CharacterDashboard() {
  const [characters, setCharacters] = useState(mockCharacters);
  const [activeView, setActiveView] = useState(null);

  const handleSelect = (character, section) => {
    setActiveView({ character, section });
  };

  const handleAddCharacter = () => {
    alert('Open character creation modal or redirect to generator');
  };

  const updateCharacterInState = (updatedCharacter) => {
    const newCharacters = characters.map((c) =>
      c.id === updatedCharacter.id ? updatedCharacter : c
    );
    setCharacters(newCharacters);
    setActiveView({ ...activeView, character: updatedCharacter });
  };

  return (
    <div className="columns m-0" style={{ minHeight: '100vh' }}>
      <div className="column is-one-quarter p-0">
        <Sidebar
          characters={characters}
          onSelectCharacter={handleSelect}
          onAddCharacter={handleAddCharacter}
        />
      </div>
      <div className="column p-5">
        {activeView ? (
          <>
            <h1 className="title">
              {activeView.character.name} - {activeView.section}
            </h1>

            {activeView.section === 'Character Details' && (
              <CharacterHeaderSection
                character={activeView.character}
                updateField={(key, value) => {
                  const updatedCharacter = {
                    ...activeView.character,
                    [key]: value,
                  };
                  updateCharacterInState(updatedCharacter);
                }}
                template={
                  activeView.character.gameSystem === 'Dungeons & Dragons'
                    ? {}
                    : { headerFields: Object.keys(fieldLabels) }
                }
              />
            )}

            {activeView.section === 'Stats' && (
              <StatsSection
                stats={activeView.character.stats || {}}
                updateStat={(stat, value) => {
                  const updatedCharacter = {
                    ...activeView.character,
                    stats: {
                      ...activeView.character.stats,
                      [stat]: value,
                    },
                  };
                  updateCharacterInState(updatedCharacter);
                }}
              />
            )}

            {activeView.section === 'Skills' && (
              <SkillsSection
                skills={activeView.character.skills || []}
                setSkills={(newSkills) => {
                  const updatedCharacter = {
                    ...activeView.character,
                    skills: newSkills,
                  };
                  updateCharacterInState(updatedCharacter);
                }}
              />
            )}

            {activeView.section === 'Armor/AC' && (
              <ACSpeedSection
                values={activeView.character.acSpeed || {}}
                updateField={(field, newValue) => {
                  const updatedCharacter = {
                    ...activeView.character,
                    acSpeed: {
                      ...activeView.character.acSpeed,
                      [field]: newValue,
                    },
                  };
                  updateCharacterInState(updatedCharacter);
                }}
              />
            )}

            {activeView.section === 'Health' && (
              <HealthSection
                health={activeView.character.health || {}}
                updateHealthField={(field, newValue) => {
                  const updatedCharacter = {
                    ...activeView.character,
                    health: {
                      ...activeView.character.health,
                      [field]: newValue,
                    },
                  };
                  updateCharacterInState(updatedCharacter);
                }}
                toggleDeathSave={(type, index) => {
                  const updatedCharacter = {
                    ...activeView.character,
                    health: {
                      ...activeView.character.health,
                      deathSaves: {
                        ...activeView.character.health.deathSaves,
                        [type]: activeView.character.health.deathSaves[type].map(
                          (val, i) => (i === index ? !val : val)
                        ),
                      },
                    },
                  };
                  updateCharacterInState(updatedCharacter);
                }}
              />
            )}

            {activeView.section === 'Attacks' && (
              <AttacksSection
                attacks={activeView.character.attacks || []}
                setAttacks={(newAttacks) => {
                  const updatedCharacter = {
                    ...activeView.character,
                    attacks: newAttacks,
                  };
                  updateCharacterInState(updatedCharacter);
                }}
              />
            )}

            {activeView.section === 'Equipment' && (
              <InventorySection
                inventory={activeView.character.inventory || []}
                setInventory={(newInventory) => {
                  const updatedCharacter = {
                    ...activeView.character,
                    inventory: newInventory,
                  };
                  updateCharacterInState(updatedCharacter);
                }}
              />
            )}

            {activeView.section === 'Features and Traits' && (
              <RoleplayFieldsSection
                attributes={activeView.character.roleplay || {}}
                updateField={(field, value) => {
                  const updatedCharacter = {
                    ...activeView.character,
                    roleplay: {
                      ...activeView.character.roleplay,
                      [field]: value,
                    },
                  };
                  updateCharacterInState(updatedCharacter);
                }}
              />
            )}

            {activeView.section === 'Character Sheet' && (
              <CharacterSheet
                character={activeView.character}
                updateCharacter={(newData) => updateCharacterInState(newData)}
              />
            )}



            {![ 
              'Character Details', 'Stats', 'Skills', 'Armor/AC', 'Health',
              'Attacks', 'Equipment', 'Features and Traits'
            ].includes(activeView.section) && (
              <p>Display {activeView.section} content here...</p>
            )}
          </>
        ) : (
          <p className="has-text-grey">Select a character to view details</p>
        )}
      </div>
    </div>
  );
}
