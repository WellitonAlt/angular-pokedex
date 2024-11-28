import { PokemonEvolutionsModel } from '@core/models';
import { EvolvesModel, PokemonEvolutionChainModel } from '@core/models/pokemon-evolution-chain.model';


const evolvesModelToPokemonEvolutionModel = (evolves: EvolvesModel[]): PokemonEvolutionsModel[] => {
  const evolutions: PokemonEvolutionsModel[] = [];

  for (const evolve of evolves) {
    const evolution: PokemonEvolutionsModel = {
      id: getPokemonNumberFromUrl(evolve.species.url),
      name: evolve.species.name,
    };

    if (evolve.evolution_details.length > 0) {
      evolution.details = evolve.evolution_details.map(detail => ({
        trigger: detail.trigger.name,
        item: detail.item
          ? detail.item.name
          : (detail.held_item
            ? detail.held_item.name
            : ''),
        min_level: detail.min_level,
        min_happiness: detail.min_happiness,
        time_of_day: detail.time_of_day,
        known_move_type: detail.known_move_type ? detail.known_move_type.name : '',
      }));
    }

    if (evolve.evolves_to.length > 0) {
      evolution.evolutions = evolvesModelToPokemonEvolutionModel(evolve.evolves_to);
    }

    evolutions.push(evolution);
  }

  return evolutions;
};

export const getPokemonNumberFromUrl = (url: string): number => {
  const numberPattern = /\d+/g;
  const lastNumber = url.match(numberPattern)?.pop();

  return lastNumber ? +lastNumber : 0;
};


export const pokemonEvolutionChainModelToPokemonEvolutionModel = (evolutionChain: PokemonEvolutionChainModel): PokemonEvolutionsModel => {
  const chain = evolutionChain.chain;

  const evolution: PokemonEvolutionsModel = {
    id: getPokemonNumberFromUrl(chain.species.url),
    name: chain.species.name,
  };

  if (chain.evolves_to.length > 0) {
    evolution.evolutions = evolvesModelToPokemonEvolutionModel(chain.evolves_to);
  }

  return evolution;
};
