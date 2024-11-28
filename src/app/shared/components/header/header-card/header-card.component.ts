import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { getPokemonImgUrl, getTypeIconByName } from '@core/util';
import { PokemonModel } from '@models';
import { PokemonGenderPipe, SafeHtmlPipe } from '@pipes';
import { TypeLabelComponent } from '@shared/components/type-label/type-label.component';


@Component({
  selector: 'app-header-card',
  imports:[
    PokemonGenderPipe,
    SafeHtmlPipe,
    TypeLabelComponent,
    UpperCasePipe,
  ],
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss'],
})
export class HeaderCardComponent {

  public pokemon = input.required<PokemonModel>();

  public getTypeIconByName = getTypeIconByName;
  public getPokemonImgUrl = getPokemonImgUrl;

}
