export const initialState = { pokemonTeam: [] };

export const pokemonsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON_TO_TEAM": {
      const newPokemon = action.payload;

      const pokemonExists = state.pokemonTeam.find(
        (pokemon) => pokemon.id === newPokemon.id
      );

      return pokemonExists
        ? state
        : { ...state, pokemonTeam: [...state.pokemonTeam, newPokemon] };
    }

    case "REMOVE_POKEMON_FROM_TEAM": {
      const pokemonToRemove = action.payload;

      return {
        ...state,
        pokemonTeam: [...state.pokemonTeam].filter(
          (pokemon) => pokemon.id !== pokemonToRemove.id
        ),
      };
    }
  }
};
