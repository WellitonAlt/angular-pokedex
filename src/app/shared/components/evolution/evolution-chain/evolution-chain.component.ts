import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { PokemonEvolutionsModel } from '@core/models';

import { EvolutionPokemonComponent } from '../evolution-pokemon/evolution-pokemon.component';


@Component({
  selector: 'app-evolution-chain',
  imports: [
    CommonModule,
    EvolutionPokemonComponent,
  ],
  templateUrl: './evolution-chain.component.html',
})
export class EvolutionChainComponent {

  public chain = input.required<PokemonEvolutionsModel[]>();
  public pokemonNumber = input.required<number>();

}
