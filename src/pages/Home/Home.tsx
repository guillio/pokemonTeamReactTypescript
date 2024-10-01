import { useState, useEffect } from "react";

import {
  returnPokemons,
  returnPokemonInfoByUrl,
} from "../../services/pokemon.service";
import { PokemonCard } from "../../components/UI/PokemonCard";

interface Props {}

const Home = (props: Props) => {
  const [pokemonsData, setPokemonsData] = useState([]);

  const returnPokemonsCall = async () => {
    const data = await returnPokemons();

    console.log({ data });
    const pokemonsPromises = data.results.map((pokemonPro) =>
      returnPokemonInfoByUrl(pokemonPro.url)
    );

    return Promise.all(pokemonsPromises).then((data) => setPokemonsData(data));
  };

  useEffect(() => {
    returnPokemonsCall();
  }, []);

  return (
    <div>
      {pokemonsData.map((pokemon, index) => {
        return <PokemonCard key={index} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default Home;
