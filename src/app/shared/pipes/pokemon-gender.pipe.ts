import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'gender' })
export class PokemonGenderPipe implements PipeTransform {
  public transform(value: string): string {
    value = value.toLowerCase();


    if (/.*-m$/.test(value)) {
      return `${value.replace('-m', ' &#9794;')}`;
    }

    if (/.*-f$/.test(value)) {
      return `${value.replace('-f', ' &#9792;')}`;
    }

    return value;
  }
}
