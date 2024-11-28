import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'hgToKgPipe' })
export class HgToKgPipe implements PipeTransform {
  public transform(value: number): number {
    return value / 100;
  }
}
