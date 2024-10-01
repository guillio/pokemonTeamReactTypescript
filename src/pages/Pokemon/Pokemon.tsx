import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { returnPokemonInfoById } from "../../services/pokemon.service";

const Pokemon = () => {
  const { id } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const returnPokemon = async () => {
    const data = await returnPokemonInfoById(id);
    return setPokemonInfo(data);
  };

  useEffect(() => {
    returnPokemon();
  }, []);

  return (
    <div>
      <img
        src={pokemonInfo?.sprites.front_default}
        alt={`${pokemonInfo?.name} photo`}
        width={150}
        height={150}
      />
      <p>{pokemonInfo?.name}</p>
    </div>
  );
};

export default Pokemon;
