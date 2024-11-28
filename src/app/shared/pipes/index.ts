import { DmToMPipe } from './dm-to-m.pipe';
import { HgToKgPipe } from './hg-to-kg.pipe';
import { PokemonGenderPipe } from './pokemon-gender.pipe';
import { PokemonStatNamePipe } from './pokemon-stat-name.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';


export * from './dm-to-m.pipe';
export * from './hg-to-kg.pipe';
export * from './pokemon-gender.pipe';
export * from './pokemon-stat-name.pipe';
export * from './safe-html.pipe';

export const pipes = [
  DmToMPipe,
  HgToKgPipe,
  PokemonGenderPipe,
  PokemonStatNamePipe,
  SafeHtmlPipe,
];
