/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/member-ordering */
import { computed, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { catchError, EMPTY, Subject, switchMap, tap } from 'rxjs';

import { PokemonService } from '@core/services';
import { getRadomPokemonNumberByRegion } from '@core/util';
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
export class PokemonDataV1 extends ErrorData {

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

    this.pokemon$
      .pipe(
        takeUntilDestroyed(),
        tap(pokemon => {
          this.state.update((state) => ({
            ...state,
            pokemon,
            loading: false,
          }));
        }),
      ).subscribe();

    this.pokemonNumber$
      .pipe(
        takeUntilDestroyed(),
        tap(pokemonNumber => {
          this.state.update((state) => ({
            ...state,
            pokemonNumber,
            loading: false,
          }));
        }),
      ).subscribe();

    this.error$
      .pipe(
        takeUntilDestroyed(),
        tap(error => {
          this.state.update((state) => ({
            ...state,
            error,
          }));
        }),
      ).subscribe();

    this.loading$
      .pipe(
        takeUntilDestroyed(),
        tap(loading => {
          this.state.update((state) => ({
            ...state,
            loading,
          }));
        }),
      ).subscribe();
  }

  public getPokemonByNumber(pokemonNumber: number): void {
    this.pokemonNumber$.next(pokemonNumber);
  }

  public getRadomPokemonByRegion(region: RegionModel): void {
    this.getPokemonByNumber(getRadomPokemonNumberByRegion(region));
  }

}
