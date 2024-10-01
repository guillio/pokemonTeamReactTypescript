export async function returnPokemons(offset = 0) {
  try {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
    );
    return data.json();
  } catch (err) {
    return err;
  }
}

export async function returnPokemonInfoByUrl(url) {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (err) {
    return err;
  }
}

export async function returnPokemonInfoById(id) {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return data.json();
  } catch (err) {
    return err;
  }
}
