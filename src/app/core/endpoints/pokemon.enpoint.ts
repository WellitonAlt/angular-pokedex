export const POKEMON = 'pokemon';
export const POKEMON_SPECIES = 'pokemon_species';
export const POKEMON_EVOLUTION_CHAIN = 'pokemon_evolution_chain';

export const pokemonEndpoints: Record<string, string> = {
  pokemon: 'pokemon/{{0}}',
  pokemon_species: 'pokemon-species/{{0}}',
  pokemon_evolution_chain: 'evolution-chain/{{0}}',
};
