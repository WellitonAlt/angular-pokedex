import { Component, input, OnInit } from '@angular/core';

import { TypeIconModel } from '@core/models';
import { getTypeColorByName, getTypeIconByName } from '@core/util';


@Component({
  selector: 'app-type-label',
  templateUrl: './type-label.component.html',
  styleUrls: ['./type-label.component.scss'],
})
export class TypeLabelComponent implements OnInit {

  public typeName = input.required<string>();
  public onlyIcon = input<boolean>(false);

  public typeIcon!: TypeIconModel;
  public typeColor!: string;

  ngOnInit(): void {
    this.typeIcon = getTypeIconByName(this.typeName());
    this.typeColor = getTypeColorByName(this.typeName());
  }

}
