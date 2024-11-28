/* eslint-disable @typescript-eslint/member-ordering */
import { inject, Injectable, Signal } from '@angular/core';

import { signalSlice } from 'ngxtension/signal-slice';
import { catchError, EMPTY, map, Observable, switchMap } from 'rxjs';

import { PokemonService } from '@core/services';
import { getRadomPokemonNumberByRegion, KANTO } from '@core/util';
import { PokemonModel, RegionModel } from '@models';

import { ErrorData } from './error.data';


interface StateModel {
  pokemon: PokemonModel | undefined,
  pokemonNumber: number | undefined,
  error: string | undefined;
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonDataV3 extends ErrorData {

  private readonly pokemonService = inject(PokemonService);

  // State

  private readonly initialState: StateModel = {
    pokemon: undefined,
    pokemonNumber: undefined,
    error: undefined,
    loading: true,
  };

  // Actions

  private readonly getCompletePokemon = (state: Signal<StateModel>, pokemonNumber: number): Observable<StateModel> => {
    return this.pokemonService.getCompletePokemon(pokemonNumber).pipe(
      map((pokemon) => ({
        ...state(),
        pokemonNumber: pokemonNumber,
        pokemon: pokemon,
        loading: false,
      })),
      catchError(error => {
        this.handleError(error);

        return EMPTY;
      }),
    );
  };

  private readonly getPokemonByNumber = (state: Signal<StateModel>, action$: Observable<number>): Observable<StateModel> =>
    action$.pipe(
      switchMap(pokemonNumber => this.getCompletePokemon(state, pokemonNumber)),
    );

  private readonly getRadomPokemonByRegion = (state: Signal<StateModel>, action$: Observable<RegionModel>): Observable<StateModel> =>
    action$.pipe(
      switchMap(region => {
        const pokemonNumber = getRadomPokemonNumberByRegion(region);

        return this.getCompletePokemon(state, pokemonNumber);
      }),
    );


  // Slice

  public state = signalSlice({
    initialState: this.initialState,
    selectors: (state) => ({
      loadedAndNoError: (): boolean => !state.loading() && !state.error(),
    }),
    actionSources: {
      getPokemonByNumber: this.getPokemonByNumber,
      getRadomPokemonByRegion: this.getRadomPokemonByRegion,
    },
  });

  constructor() {
    super();

    this.state.getRadomPokemonByRegion({ name: KANTO });
  }

}
