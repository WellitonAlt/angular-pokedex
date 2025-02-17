export interface PokemonModel {
  abilities: PokemonAbility[];
  color: ColorModel;
  evolution_chain: EvolutionChainModel;
  evolutions: PokemonEvolutionsModel;
  flavorText: FlavorTextModel | undefined;
  id: number;
  number: string;
  name: string;
  types: TypeSlotModel[];
  height: number;
  weight: number;
  gradient: string;
  stats: PokemonStatModel[];
  sprites: SpritesModel;
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  }
  is_hidden: boolean;
  slot: number;
}

export interface PokemonEvolutionsModel {
  id: number;
  name: string;
  details?: PokemonDetailEvolutionModel[];
  evolutions?: PokemonEvolutionsModel[];
}

export interface PokemonDetailEvolutionModel {
  trigger: string;
  item: string;
  min_level: number;
  min_happiness: number;
  time_of_day: 'day' | 'night';
  known_move: string;
  known_move_type: string;
  relative_physical_stats: number;
}

export interface PokemonSpeciesModel {
  color: ColorModel;
  evolution_chain: EvolutionChainModel;
  flavor_text_entries: FlavorTextModel[];
}

export interface FlavorTextModel {
  flavor_text: string;
  language: LanguageModel;
  version: VersionModel;
}

export interface LanguageModel {
  name: string;
  url: string;
}

export interface VersionModel {
  name: string;
  url: string;
}

export interface ColorModel {
  name:
  | 'black'
  | 'blue'
  | 'brown'
  | 'gray'
  | 'green'
  | 'pink'
  | 'purple'
  | 'red'
  | 'white'
  | 'yellow';
  url: string;
}

export interface TypeSlotModel {
  slot: number;
  type: TypeModel;
}

export interface TypeModel {
  name: string;
  url: string;
}

export interface PokemonStatModel {
  base_stat: number;
  effort: number;
  stat: StatModel;
}

export interface StatModel {
  name: string;
  url: string;
}

export interface EvolutionChainModel {
  url: string;
}

export interface SpritesModel {
  front_default: string;
}
