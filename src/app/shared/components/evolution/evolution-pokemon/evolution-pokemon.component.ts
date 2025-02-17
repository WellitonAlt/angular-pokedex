import { Component, input } from '@angular/core';

import { PokemonEvolutionsModel } from '@core/models';
import { getPokemonPixelImgUrl } from '@core/util';

import { EvolutionDetailComponent } from '../evolution-detail/evolution-detail.component';


@Component({
  selector: 'app-evolution-pokemon',
  imports: [
    EvolutionDetailComponent,
  ],
  templateUrl: './evolution-pokemon.component.html',
  styleUrl: './evolution-pokemon.component.scss',
})
export class EvolutionPokemonComponent {

  public pokemon = input.required<PokemonEvolutionsModel>();
  public hasOpacity = input.required<boolean>();
  public showDetail = input<boolean>(false);

  public getPokemonPixelImgUrl = getPokemonPixelImgUrl;

}
