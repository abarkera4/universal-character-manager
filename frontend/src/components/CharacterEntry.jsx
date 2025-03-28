import React, { useState } from 'react';

const CharacterEntry = ({ character, onSelectCharacter }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <a onClick={() => setExpanded(!expanded)}>
        <img src={character.logo} alt="" style={{ width: '18px', marginRight: '6px' }} />
        {character.name} {expanded ? '▲' : '▼'}
      </a>
      {expanded && (
        <ul className="ml-4 mt-1">
          <li><a onClick={() => onSelectCharacter(character, 'Character Details')}>Character Details</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Stats')}>Stats</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Skills')}>Skills</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Armor/AC')}>Armor/AC</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Health')}>Health</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Attacks')}>Attacks</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Equipment')}>Equipment</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Features and Traits')}>Features and Traits</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Character Sheet')}>Character Sheet</a></li>
        </ul>
      )}
    </li>
  );
};

export default CharacterEntry;
