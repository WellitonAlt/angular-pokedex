import { Component, input } from '@angular/core';

import { PokemonEvolutionsModel } from '@core/models';

import { EvolutionChainComponent } from './evolution-chain/evolution-chain.component';
import { EvolutionPokemonComponent } from './evolution-pokemon/evolution-pokemon.component';


@Component({
  selector: 'app-evolution',
  imports: [EvolutionPokemonComponent, EvolutionChainComponent],
  templateUrl: './evolution.component.html',
})
export class EvolutionComponent {

  public evolution = input.required<PokemonEvolutionsModel>();
  public pokemonNumber = input.required<number>();

}
