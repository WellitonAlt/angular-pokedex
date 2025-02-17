export interface PokemonEvolutionChainModel {
  id: number;
  chain: ChainModel;
}

export interface ChainModel {
  species: ChainSpeciesModel;
  evolution_details: EvolutionDetailModel[]
  evolves_to: EvolvesModel[];
}

export interface ChainSpeciesModel {
  name: string;
  id?: number;
  url: string;
}

export interface EvolvesModel {
  species: ChainSpeciesModel;
  evolution_details: EvolutionDetailModel[];
  evolves_to: EvolvesModel[];
}

export interface EvolutionDetailModel {
  held_item: {
    name: string;
  },
  item: {
    name: string;
  }
  min_level: number;
  min_happiness:	number;
  known_move: {
    name: string;
    url: string;
  },
  known_move_type: {
    name: string;
  }
  relative_physical_stats: number,
  time_of_day:	'day' | 'night';
  trigger: {
    name:
    | 'level-up'
    | 'trade'
    | 'use-item'
    | 'shed'
    | 'spin'
    | 'tower-of-darkness'
    | 'tower-of-waters'
    | 'three-critical-hits'
    | 'take-damage'
    | 'other'
    | 'agile-style-move'
    | 'strong-style-move'
    | 'recoil-damage';
  }
}
