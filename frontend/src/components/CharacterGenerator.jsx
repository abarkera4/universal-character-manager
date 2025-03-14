import React, { Component } from "react";
import { faker } from "@faker-js/faker";

class CharacterGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      naturalHColor: false, 
      naturalEColor: false,  
    };

    this.handleHairInputChange = this.handleHairInputChange.bind(this);
    this.handleEyeInputChange = this.handleEyeInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const characters = [];
    for (let i = 0; i < 5; i++) {
      const character = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        eyeColor: faker.color.human(),
        hairColor: faker.color.human(),
      };
      characters.push(character);
    }
    this.setState({ characters });
  }


  generateNaturalHairColor() {
    const naturalHairColors = {
      40: "black",
      75: "brunette",
      95: "blonde",
      100: "red",
    };
    let number = Math.floor(Math.random() * 100) + 1;
    for (let threshold in naturalHairColors) {
      if (number <= threshold) {
        return naturalHairColors[threshold];
      }
    }

    return "brown";
  }


  generateRandomNaturalEyeColor() {

    const naturalEyeColors = {
      60: "brown",
      93: "blue",
      95: "hazel",
      97: "amber",
      99: "gray",
      100: "violet red",
    };
    let number = Math.floor(Math.random() * 100) + 1;
    for (let threshold in naturalEyeColors) {
      if (number <= threshold) {
        return naturalEyeColors[threshold];
      }
    }

    return "brown";
  }

  handleHairInputChange(e) {
    this.setState({
      naturalHColor: e.target.checked,
    });
  }

  handleEyeInputChange(e) {
    this.setState({
      naturalEColor: e.target.checked,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ characters: [] }, () => {
      const characters = [];
      for (let i = 0; i < 5; i++) {
        const character = {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          eyeColor: this.state.naturalEColor
            ? this.generateRandomNaturalEyeColor()
            : faker.color.human(),
          hairColor: this.state.naturalHColor
            ? this.generateNaturalHairColor()
            : faker.color.human(),
        };
        characters.push(character);
      }
      this.setState({ characters });
    });
  }

  renderCharacters(character, index) {
    return (
      <div key={index}>
        <p>
          {character.firstName} {character.lastName} 
        </p>
        <p>
            &mdash; Eye color:{" "}
            {character.eyeColor}
        </p>
        <p>
            &mdash; Hair color: {character.hairColor}
        </p>
      </div>
    );
  }

  render() {
    return (
      <>
        <h1>Generate Random Characters!</h1>

        <form onSubmit={this.handleSubmit}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            <input
              name="naturalHColor"
              type="checkbox"
              checked={this.state.naturalHColor}
              onChange={this.handleHairInputChange}
              style={{ marginRight: "0.5rem" }}
            />
            Use natural hair color
          </label>


          <label style={{ display: "block", marginBottom: "1rem" }}>
            <input
              name="naturalEColor"
              type="checkbox"
              checked={this.state.naturalEColor}
              onChange={this.handleEyeInputChange}
              style={{ marginRight: "0.5rem" }}
            />
            Use natural eye color
          </label>

          <button type="submit">Generate 5 New Characters</button>
        </form>

        {this.state.characters.map((character, index) =>
          this.renderCharacters(character, index)
        )}
      </>
    );
  }
}

export default CharacterGenerator;
