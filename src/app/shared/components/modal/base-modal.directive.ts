import { Directive } from '@angular/core';


@Directive()
export abstract class BaseModalDirective {
  public title?: string;
}
