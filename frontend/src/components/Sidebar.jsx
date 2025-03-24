import React from 'react';
import CharacterEntry from './CharacterEntry';

const Sidebar = ({ characters, onSelectCharacter, onAddCharacter }) => {
  return (
    <aside className="menu has-background-light p-3">
      <p className="menu-label">Characters</p>
      <ul className="menu-list">
        {characters.map(char => (
          <CharacterEntry key={char.id} character={char} onSelectCharacter={onSelectCharacter} />
        ))}
        <li>
          <button className="button is-link is-light mt-3 is-fullwidth" onClick={onAddCharacter}>
            + Add Character
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
