export const getPokemonImgUrl = (pokemonNumber: string): string =>
  `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemonNumber}.png`;

export const getPokemonPixelImgUrl = (pokemonNumber: string): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

export const getPokemonItemImgUrl = (itemName: string): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${itemName}.png`;
