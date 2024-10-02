export const initialState = { pokemonTeam: [] };

export const pokemonsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON_TO_TEAM": {
      const { pokemonTeam } = state;
      console.log("Entra");
      console.log({ pokemonTeam });
      const newPokemon = action.payload;

      const pokemonExists = pokemonTeam.pokemonTeam.some(
        (pokemon) => pokemon.id === newPokemon.id
      );

      const pokemonTeamArray = pokemonTeam.length > 0 ? pokemonTeam : [];

      console.log({ pokemonTeamArray });

      return pokemonExists
        ? state
        : { ...state, pokemonTeam: pokemonTeamArray.push(newPokemon) };
    }
  }
};
