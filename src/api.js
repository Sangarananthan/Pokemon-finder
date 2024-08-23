import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const fetchPokemons = async () => {
  const response = await api.get("pokemon");
  return response.data.results;
};

export const fetchPokemonDetails = async (id) => {
  const response = await api.get(`pokemon/${id}`);
  return response.data;
};
