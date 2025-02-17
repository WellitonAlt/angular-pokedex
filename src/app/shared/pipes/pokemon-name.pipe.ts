import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'name' })
export class PokemonNamePipe implements PipeTransform {
  public transform(value: string): string {
    value = value.toLowerCase();


    if (/.*-m$/.test(value)) {
      return `${value.replace('-m', ' &#9794;')}`;
    }

    if (/.*-f$/.test(value)) {
      return `${value.replace('-f', ' &#9792;')}`;
    }

    if (value === 'farfetchd') {
      // eslint-disable-next-line quotes
      return `farfetch'd`;
    }

    if (value === 'mr-mime') {
      return 'mr. mime';
    }

    return value;
  }
}
