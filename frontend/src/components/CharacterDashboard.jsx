import React, { useState } from 'react';
import Sidebar from './Sidebar';
/*import '../styles/CharacterDashboard.css'; // optional for custom styles*/

const mockCharacters = [
  {
    id: 1,
    name: 'Kael the Brave',
    game: 'D&D',
    logo: '../assets/D&D.jpg',
  },
  {
    id: 2,
    name: 'Agent Nova',
    game: 'Cyberpunk',
    logo: '/logos/cyberpunk.png',
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
            <h1 className="title">{activeView.character.name} - {activeView.section}</h1>
            <p>Content for {activeView.section} goes here...</p>
          </>
        ) : (
          <p className="has-text-grey">Select a character to view details</p>
        )}
      </div>
    </div>
  );
}
