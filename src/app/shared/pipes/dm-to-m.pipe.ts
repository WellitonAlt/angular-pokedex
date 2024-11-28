import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'dmToMPipe' })
export class DmToMPipe implements PipeTransform {
  public transform(value: number): number {
    return value / 10;
  }
}
