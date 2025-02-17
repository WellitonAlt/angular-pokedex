import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { PokemonModel } from '@core/models';
import { getPokemonPixelImgUrl } from '@core/util';
import { DmToMPipe, HgToKgPipe, PokemonNamePipe, SafeHtmlPipe } from '@pipes';

import { EvolutionComponent } from '../evolution/evolution.component';
import { BaseModalDirective } from '../modal/base-modal.directive';
import { ModalComponent } from '../modal/modal.component';
import { TypeLabelComponent } from '../type-label/type-label.component';


@Component({
  selector: 'app-modal-more-info',
  imports: [
    EvolutionComponent,
    ModalComponent,
    TypeLabelComponent,
    DmToMPipe,
    HgToKgPipe,
    PokemonNamePipe,
    SafeHtmlPipe,
    TitleCasePipe,
    UpperCasePipe,
  ],
  templateUrl: './modal-more-info.component.html',
  styleUrl: './modal-more-info.component.scss',
})
export class ModalMoreInfoComponent extends BaseModalDirective {

  public pokemon!: PokemonModel;

  public getPokemonPixelImgUrl = getPokemonPixelImgUrl;

}
