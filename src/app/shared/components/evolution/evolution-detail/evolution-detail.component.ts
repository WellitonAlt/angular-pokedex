import { TitleCasePipe } from '@angular/common';
import { Component, input, OnInit, signal } from '@angular/core';

import { PokemonDetailEvolutionModel } from '@core/models';
import { getPokemonItemImgUrl, GLACEON_NUMBER, LEAFEON_NUMBER, MAGNEZONE_NUMBER, MANKEY_NUMBERS } from '@core/util';
import { TypeLabelComponent } from '@shared/components/type-label/type-label.component';


interface EvolutionDetail {
  item: string;
  known_move: string;
  known_move_name: string;
  known_move_type: string;
  min_happiness: number;
  min_level: number;
  relative_physical_stats: number;
  time_of_day: 'day' | 'night';
  trigger: string;
  use_move: number;
}

@Component({
  selector: 'app-evolution-detail',
  imports: [
    TypeLabelComponent,
    TitleCasePipe,
  ],
  templateUrl: './evolution-detail.component.html',
  styleUrl: './evolution-detail.component.scss',
})
export class EvolutionDetailComponent implements OnInit {

  public details = input.required<PokemonDetailEvolutionModel[]>();
  public id = input.required<number>();

  public evolutionDetail = signal<Partial<EvolutionDetail>>({});

  public getPokemonItemImgUrl = getPokemonItemImgUrl;

  ngOnInit(): void {
    this.setEvolutionDetail();
  }

  public setEvolutionDetail(): void {
    if (this.details().length > 0) {
      this.evolutionDetail.update(() => ({
        trigger: this.details()[0].trigger,
        item: this.details()[0].item,
        min_level: this.details()[0].min_level,
        min_happiness: this.details()[0].min_happiness,
        time_of_day: this.details()[0].time_of_day,
        known_move_type: this.details()[0].known_move_type,
        known_move: this.details()[0].known_move,
        relative_physical_stats: this.details()[0].relative_physical_stats,
      }));

      if (MANKEY_NUMBERS.includes(this.id())) {
        this.evolutionDetail.update((state) => ({
          ...state,
          known_move_name: 'Rage Fist',
          use_move:  20,
        }));
      }

      if (this.id() === MAGNEZONE_NUMBER) {
        this.evolutionDetail.update((state) => ({
          ...state,
          trigger: this.details()[4].trigger,
          item:  this.details()[4].item,
        }));
      }

      if (this.id() === LEAFEON_NUMBER || this.id() === GLACEON_NUMBER) {
        this.evolutionDetail.update((state) => ({
          ...state,
          trigger: this.details()[3].trigger,
          item:  this.details()[3].item,
        }));
      }
    }
  }

}
