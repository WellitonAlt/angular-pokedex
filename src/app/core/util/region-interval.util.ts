import { RegionIntervalModel, RegionModel } from '@core/models';


const getRandomNumberFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomPokemonNumberByRegion = (region: RegionModel): number => {
  const interval = generationsInterval[region.name];

  return getRandomNumberFromInterval(interval.start, interval.end);
};

export const generationsInterval: Record<string, RegionIntervalModel> = {
  kanto: {
    start: 1,
    end: 151,
  },
};
