export const getPokemonImgUrl = (pokemonNumber: string): string =>
  `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemonNumber}.png`;

export const getPokemonPixelImgUrl = (pokemonNumber: string): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

export const getPokemonItemImgUrl = (itemName: string): string => {
  if (itemName === 'black-augurite') {
    return 'https://archives.bulbagarden.net/media/upload/0/0f/Bag_Black_Augurite_SV_Sprite.png';
  }

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${itemName}.png`;
};
