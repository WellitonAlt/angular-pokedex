/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { computed, inject, Injectable, signal } from '@angular/core';

import { connect } from 'ngxtension/connect';
import { catchError, EMPTY, Subject, switchMap } from 'rxjs';

import { PokemonService } from '@core/services';
import { getRandomPokemonNumberByRegion } from '@core/util';
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
export class PokemonDataV2 extends ErrorData {

  private readonly pokemonService = inject(PokemonService);

  // State
  private readonly state = signal<StateModel>({
    pokemon: undefined,
    pokemonNumber: undefined,
    error: undefined,
    loading: true,
  });

  // Sources

  private readonly pokemonNumber$ = new Subject<number>();
  private readonly loading$ = new Subject<boolean>();

  private readonly pokemon$ = this.pokemonNumber$.pipe(
    switchMap(pokemonNumber =>
      this.pokemonService.getCompletePokemon(pokemonNumber).pipe(
        catchError(error => {
          this.handleError(error);

          return EMPTY;
        }),
      ),
    ),
  );

  // Selectors

  private readonly pokemonComputation = () => this.state().pokemon;
  private readonly errorComputation = () => this.state().error;
  private readonly loadingComputation = () => this.state().loading;

  public pokemon = computed(this.pokemonComputation);
  public error = computed(this.errorComputation);
  public loading = computed(this.loadingComputation);

  constructor() {
    super();

    // Reducers

    connect(this.state)
      .with(this.pokemon$,
        (state, pokemon) => ({
          ...state,
          pokemon,
          loading: false,
        }),
      )
      .with(this.pokemonNumber$,
        (state, pokemonNumber) => ({
          ...state,
          pokemonNumber,
          loading: true,
        }),
      )
      .with(this.error$,
        (_, error) => ({
          error,
        }),
      )
      .with(this.loading$,
        (_, loading) => ({
          loading,
        }),
      );
  }

  public getPokemonByNumber(pokemonNumber: number): void {
    this.pokemonNumber$.next(pokemonNumber);
  }

  public getRandomPokemonByRegion(region: RegionModel): void {
    this.getPokemonByNumber(getRandomPokemonNumberByRegion(region));
  }

}
