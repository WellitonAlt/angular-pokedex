import { Component, inject, input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  public title = input<string>();

  public activeModal = inject(NgbActiveModal);

}
