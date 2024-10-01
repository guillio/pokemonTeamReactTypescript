export const initialState = [];

export const pokemonsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POKEMON": {
      const newPokemon = action.payload;

      const pokemonExists = state.some(
        (pokemon) => pokemon.name === newPokemon.name
      );

      return pokemonExists && [...state, newPokemon];
    }
  }
};
