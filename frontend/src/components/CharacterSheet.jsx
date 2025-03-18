import React from "react";
import "./CharacterSheet.css";

const CharacterSheet = () => {
  return (
    <div className="sheet-container">

      <header className="sheet-header">
        <div className="sheet-header-left">
          <h1 className="sheet-title">Dungeons &amp; Dragons</h1>
          <div className="character-name-field">
            <label>Character Name</label>
            <input type="text" placeholder="Character Name" />
          </div>
        </div>

        <div className="sheet-header-right">
          <div className="header-field">
            <label>Class &amp; Level</label>
            <input type="text" placeholder="Class & Level" />
          </div>
          <div className="header-field">
            <label>Background</label>
            <input type="text" placeholder="Background" />
          </div>
          <div className="header-field">
            <label>Player Name</label>
            <input type="text" placeholder="Player Name" />
          </div>
          <div className="header-field">
            <label>Race</label>
            <input type="text" placeholder="Race" />
          </div>
          <div className="header-field">
            <label>Alignment</label>
            <input type="text" placeholder="Alignment" />
          </div>
          <div className="header-field">
            <label>Experience Points</label>
            <input type="text" placeholder="XP" />
          </div>
        </div>
      </header>


      <div className="sheet-main">
        <section className="abilities-section">
          <div className="ability-score">
            <label>Strength</label>
            <input type="text" placeholder="STR" />
          </div>
          <div className="ability-score">
            <label>Dexterity</label>
            <input type="text" placeholder="DEX" />
          </div>
          <div className="ability-score">
            <label>Constitution</label>
            <input type="text" placeholder="CON" />
          </div>
          <div className="ability-score">
            <label>Intelligence</label>
            <input type="text" placeholder="INT" />
          </div>
          <div className="ability-score">
            <label>Wisdom</label>
            <input type="text" placeholder="WIS" />
          </div>
          <div className="ability-score">
            <label>Charisma</label>
            <input type="text" placeholder="CHA" />
          </div>

          </section>

          <section className="saving-throw-section">

          <div className="inspiration">
            <label>
              <input type="checkbox" />
              Inspiration
            </label>
          </div>

          <div className="proficiency-bonus">
            <label>Proficiency Bonus</label>
            <input type="text" placeholder="+2" />
          </div>

          <div className="saving-throws">
            
            <label>
              <input type="checkbox" />
              STR
            </label>
            <label>
              <input type="checkbox" />
              DEX
            </label>
            <label>
              <input type="checkbox" />
              CON
            </label>
            <label>
              <input type="checkbox" />
              INT
            </label>
            <label>
              <input type="checkbox" />
              WIS
            </label>
            <label>
              <input type="checkbox" />
              CHA
            </label>
            <h3>SAVING THROWS</h3>
          </div>

          <div className="skills-list">
            
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text" />
              Acrobatics (Dex)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Animal Handling (Wis)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Arcana (Int)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Athletics (Str)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Deception (Cha)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              History (Int)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Insight (Wis)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Intimidation (Cha)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Investigation (Int)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Medicine (Wis)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Nature (Wis)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Performance (Cha)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Persuasion (Cha)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Religion (Int)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Sleight of Hand (Dex)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Stealth (Dex)
            </label>
            <label>
              <input type="checkbox" />
              <input className="skill-bonus" type="text"  />
              Survival (Wis)
            </label>
            <h3>SKILLS</h3>

          </div>
        </section>

        <section className="combat-section">
          <div className="ac-speed">

            <label>Armor Class</label>
            <label>Initiative</label>
            <label>Speed</label>
            
            <input type="text" placeholder="AC" />
            <input type="text" placeholder="+0" />
            <input type="text" placeholder="30 ft" />
          </div>

          <div className="hp-section">

            <label>Hit Point Maximum</label>
            <label>Current HP</label>
            <label>Temporary HP</label>
            
            <input type="text" placeholder="Current HP" />
            <input type="text" placeholder="Max HP" />
            <input type="text" placeholder="Temp HP" />
          </div>

          <div className="death-saves">
            <h3>Death Saves</h3>
            <label>Successes:</label>
            <input type="text" placeholder="0" />
            <label>Failures:</label>
            <input type="text" placeholder="0" />
          </div>

          <div className="attacks-spells">
            <h3>Attacks & Spellcasting</h3>
            <div className="attack">
              <label>Name</label>
              <input type="text" />
              <label>ATK Bonus</label>
              <input type="text" />
              <label>Damage/Type</label>
              <input type="text" />
            </div>

          </div>
        </section>

        <section className="personality-section">
          <div>
            <h3>Personality Traits</h3>
            <textarea placeholder="Traits..."></textarea>
          </div>
          <div>
            <h3>Ideals</h3>
            <textarea placeholder="Ideals..."></textarea>
          </div>
          <div>
            <h3>Bonds</h3>
            <textarea placeholder="Bonds..."></textarea>
          </div>
          <div>
            <h3>Flaws</h3>
            <textarea placeholder="Flaws..."></textarea>
          </div>
          <div className="features-traits">
            <h3>Features & Traits</h3>
            <textarea placeholder="Features & Traits..."></textarea>
          </div>
        </section>
      </div>

      <div className="bottom-section">
        <div className="equipment">
          <h3>Equipment</h3>
          <textarea placeholder="Equipment list..."></textarea>
        </div>
        <div className="proficiencies-languages">
          <h3>Other Proficiencies & Languages</h3>
          <textarea placeholder="Proficiencies..."></textarea>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
