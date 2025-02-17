import { TypeIconModel } from '@models';


const typeIconMap: Record<string, TypeIconModel> = {
  normal: {
    id: 0,
    src: './images/type-icon/normal.svg',
    name: 'Normal',
    description: 'normal',
  },
  fighting: {
    id: 1,
    src: './images/type-icon/fighting.svg',
    name: 'Fighting',
    description: 'fighting',
  },
  flying: {
    id: 2,
    src: './images/type-icon/flying.svg',
    name: 'Flying',
    description: 'flying',
  },
  poison: {
    id: 3,
    src: './images/type-icon/poison.svg',
    name: 'Poison',
    description: 'poison',
  },
  ground: {
    id: 4,
    src: './images/type-icon/ground.svg',
    name: 'Ground',
    description: 'ground',
  },
  rock: {
    id: 5,
    src: './images/type-icon/rock.svg',
    name: 'Rock',
    description: 'rock',
  },
  bug: {
    id: 6,
    src: './images/type-icon/bug.svg',
    name: 'Bug',
    description: 'bug',
  },
  ghost: {
    id: 7,
    src: './images/type-icon/ghost.svg',
    name: 'Ghost',
    description: 'ghost',
  },
  steel: {
    id: 8,
    src: './images/type-icon/steel.svg',
    name: 'steel',
    description: 'steel',
  },
  fire: {
    id: 9,
    src: './images/type-icon/fire.svg',
    name: 'Fire',
    description: 'fire',
  },
  water: {
    id: 10,
    src: './images/type-icon/water.svg',
    name: 'Water',
    description: 'water',
  },
  grass: {
    id: 11,
    src: './images/type-icon/grass.svg',
    name: 'Grass',
    description: 'grass',
  },
  electric: {
    id: 12,
    src: './images/type-icon/electric.svg',
    name: 'Electric',
    description: 'electric',
  },
  psychic: {
    id: 13,
    src: './images/type-icon/psychic.svg',
    name: 'Psychic',
    description: 'psychic',
  },
  ice: {
    id: 14,
    src: './images/type-icon/ice.svg',
    name: 'Ice',
    description: 'ice',
  },
  dragon: {
    id: 15,
    src: './images/type-icon/dragon.svg',
    name: 'Dragon',
    description: 'dragon',
  },
  dark: {
    id: 16,
    src: './images/type-icon/dark.svg',
    name: 'Dark',
    description: 'dark',
  },
  fairy: {
    id: 17,
    src: './images/type-icon/fairy.svg',
    name: 'Fairy',
    description: 'fairy',
  },
};

const gradientMap: Record<string, string> = {
  bug: 'bug-gradient',
  dark: 'dark-gradient',
  dragon: 'dragon-gradient',
  electric: 'electric-gradient',
  fairy: 'fairy-gradient',
  fighting: 'fighting-gradient',
  fire: 'fire-gradient',
  flying: 'flying-gradient',
  ghost: 'ghost-gradient',
  grass: 'grass-gradient',
  ground: 'ground-gradient',
  ice: 'ice-gradient',
  normal: 'normal-gradient',
  poison: 'poison-gradient',
  psychic: 'psychic-gradient',
  rock: 'rock-gradient',
  steel: 'steel-gradient',
  water: 'water-gradient',
};

export const getTypeIconByName = (name: string): TypeIconModel => typeIconMap[name];

export const getGradientByName = (name = 'default'): string => gradientMap[name] || 'default-gradient';


export default typeIconMap;
