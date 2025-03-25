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
          <li><a onClick={() => onSelectCharacter(character, 'Attacks')}>Attacks</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Inventory')}>Inventory</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Personality')}>Personality</a></li>
          <li><a onClick={() => onSelectCharacter(character, 'Character Sheet')}>Full Sheet</a></li>
        </ul>
      )}
    </li>
  );
};

export default CharacterEntry;
