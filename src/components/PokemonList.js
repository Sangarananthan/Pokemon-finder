import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../api";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
    };
    fetchPokemonsData();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Pokémon"
      />
      <div className="pokemon-list">
        {filteredPokemons?.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemonName={pokemon.name}
            pokemonUrl={pokemon.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
