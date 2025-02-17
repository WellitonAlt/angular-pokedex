import { UpperCasePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { getPokemonImgUrl, getTypeIconByName } from '@core/util';
import { PokemonModel } from '@models';
import { PokemonNamePipe, SafeHtmlPipe } from '@pipes';
import { ModalMoreInfoComponent } from '@shared/components/modal-more-info/modal-more-info.component';
import { TypeLabelComponent } from '@shared/components/type-label/type-label.component';


@Component({
  selector: 'app-header-card',
  imports: [
    PokemonNamePipe,
    SafeHtmlPipe,
    TypeLabelComponent,
    UpperCasePipe,
  ],
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss'],
})
export class HeaderCardComponent {

  private readonly modalService = inject(NgbModal);

  public pokemon = input.required<PokemonModel>();

  public getTypeIconByName = getTypeIconByName;
  public getPokemonImgUrl = getPokemonImgUrl;

  public openModal(): void {
    const modalReference = this.modalService.open(ModalMoreInfoComponent, { size: 'xl'});

    modalReference.componentInstance.pokemon = this.pokemon();
  }

}
