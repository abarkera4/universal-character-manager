import axios from "axios";

const API_URL = "http://localhost:8080/api/characters";

export const getCharacters = async () => {
  return axios.get(API_URL);
};

export const createCharacter = async (characterData) => {
  return axios.post(API_URL, characterData);
};

export const deleteCharacter = async (characterId) => {
  return axios.delete(`${API_URL}/${characterId}`);
};
