import { Pipe, PipeTransform } from '@angular/core';

import { getStatNameByName } from '@core/util';


@Pipe({ name: 'statName' })
export class PokemonStatNamePipe implements PipeTransform {

  public transform(value: string): string {
    value = value.toLowerCase();

    return getStatNameByName(value);
  }
}
