import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonsContext } from "../../../context/PokemonsContext";

export const PokemonCard = ({ pokemon }) => {
  const { dispatch } = useContext(PokemonsContext);

  const addToTeam = () => {
    dispatch({ type: "ADD_POKEMON_TO_TEAM", payload: pokemon });
  };

  return (
    <div>
      <img
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} photo`}
        width={150}
        height={150}
      />

      <div>
        <p>{pokemon.name}</p>
      </div>

      <Link to={`/pokemon/${pokemon.id}`}>CHECK POKEMON</Link>
      <button onClick={addToTeam}>ADD TO TEAM</button>
    </div>
  );
};
