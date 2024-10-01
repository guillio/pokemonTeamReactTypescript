import { useReducer } from "react";
import { initialState, pokemonsReducer } from "./pokemonsReducer";
import { PokemonsContext } from "./PokemonsContext";

export const PokemonsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonsReducer, initialState);

  return (
    <PokemonsContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonsContext.Provider>
  );
};
