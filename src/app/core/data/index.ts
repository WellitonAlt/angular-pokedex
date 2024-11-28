import { ErrorData } from './error.data';
import { PokemonDataV1 } from './pokemon.data.v1';
import { PokemonDataV2 } from './pokemon.data.v2';
import { PokemonDataV3 } from './pokemon.data.v3';


export * from './pokemon.data.v2';

export const services = [
  ErrorData,
  PokemonDataV1,
  PokemonDataV2,
  PokemonDataV3,
];
