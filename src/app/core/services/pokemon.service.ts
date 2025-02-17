import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { forkJoin, map, mergeMap, Observable, tap } from 'rxjs';

import { POKEMON, POKEMON_EVOLUTION_CHAIN, POKEMON_SPECIES } from '@core/endpoints/pokemon.enpoint';
import { DEFAULT_LANGUAGE, getGradientByName, pokemonApiUrl } from '@core/util';
import {
  getPokemonNumberFromUrl,
  pokemonEvolutionChainModelToPokemonEvolutionModel,
  removePokemonEvolutionFromChain,
} from '@core/util/pokemon.util';
import {
  FlavorTextModel,
  PaginationModel,
  PokemonEvolutionChainModel,
  PokemonEvolutionsModel,
  PokemonModel,
  PokemonSpeciesModel,
} from '@models';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  private readonly http = inject(HttpClient);

  private getPokemonnEvolutionChain(evolutionChainNumber: number): Observable<PokemonEvolutionsModel> {
    return this.http.get<PokemonEvolutionChainModel>(pokemonApiUrl(POKEMON_EVOLUTION_CHAIN, [evolutionChainNumber])).pipe(
      map(evolutionChain => {
        return pokemonEvolutionChainModelToPokemonEvolutionModel(evolutionChain);
      }),
    );
  }

  private getPokemonnSpecies(pokemonNumber: number): Observable<PokemonSpeciesModel> {
    return this.http.get<PokemonSpeciesModel>(pokemonApiUrl(POKEMON_SPECIES, [pokemonNumber]));
  }

  public getPokemon(pokemonNumber: number): Observable<PokemonModel> {
    return this.http.get<PokemonModel>(pokemonApiUrl(POKEMON, [pokemonNumber]))
      .pipe(
        tap(pokemon => {
          pokemon.number = String(pokemon.id).padStart(3, '0');
          pokemon.gradient = getGradientByName(pokemon.types[0].type.name);

          return pokemon;
        }),
      );
  }

  public getCompletePokemon(pokemonNumber: number): Observable<PokemonModel> {
    return forkJoin([this.getPokemon(pokemonNumber), this.getPokemonnSpecies(pokemonNumber)])
      .pipe(
        map(([pokemon, pokemonSpecies]) => {
          pokemon.flavorText = pokemonSpecies.flavor_text_entries.findLast(
            (entrie: FlavorTextModel) => entrie.language.name === DEFAULT_LANGUAGE,
          );

          pokemon.color = pokemonSpecies.color;
          pokemon.evolution_chain = pokemonSpecies.evolution_chain;

          return pokemon;
        }),
        mergeMap(pokemon => {
          const evolutionChainNumber = getPokemonNumberFromUrl(pokemon.evolution_chain.url);

          return this.getPokemonnEvolutionChain(evolutionChainNumber).pipe(
            map(evolutions => {
              pokemon.evolutions = removePokemonEvolutionFromChain(evolutions);

              return pokemon;
            }),
          );
        }),
      );
  }

  public getPokemonPage(pagination: PaginationModel): Observable<PokemonModel[]> {
    const startPokemon = ((pagination.pageNumber - 1) * pagination.pageSize) + pagination.start;

    let endPokemon = startPokemon + pagination.pageSize;

    endPokemon = endPokemon > pagination.end + 1 ? pagination.end + 1 : startPokemon + pagination.pageSize;

    const pokemon: Array<Observable<PokemonModel>> = [];

    for (let index = startPokemon; index < endPokemon; index += 1) {
      pokemon.push(this.getPokemon(index));
    }

    return forkJoin(pokemon);
  }

}
