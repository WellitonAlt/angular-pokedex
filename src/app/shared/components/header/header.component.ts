import { Component, inject } from '@angular/core';

import { PokemonDataV3 } from '@core/data/pokemon.data.v3';
import { LoadingComponent } from '@shared/components/loading/loading.component';

import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderCardComponent } from './header-card/header-card.component';


@Component({
  selector: 'app-header',
  imports: [
    HeaderCardComponent,
    LoadingComponent,
    NavbarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  public readonly pokemonData = inject(PokemonDataV3);

  public next(): void {
    console.log('next');
    this.pokemonData.state.getNextPokemon();
  }

}
