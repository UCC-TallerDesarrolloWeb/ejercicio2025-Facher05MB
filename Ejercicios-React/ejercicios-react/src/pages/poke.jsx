import { useEffect, useState } from "react";

const Poke = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  const fetchPokemons = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      const data = await response.json();
      setPokemonData(data);
      console.log(data);
    } catch (error) {
      console.error(`Error en el fetch del Pokémon: ${id} - ${error}`);
    }
  };

  useEffect(() => {
    fetchPokemons(1);
  }, []);

  

  return (
    <div>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h2>{pokemonData.name}</h2>
      <p>ID: {pokemonData.id}</p>
    </div>
  );
};

export default Poke;
