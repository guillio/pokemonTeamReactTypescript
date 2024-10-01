import { Link } from "react-router-dom";

export const PokemonCard = ({ pokemon }) => {
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
      <button>ADD TO TEAM</button>
    </div>
  );
};
