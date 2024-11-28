const maxStatsMap: Record<string, number> = {
  'hp': 255,
  'attack': 180,
  'defense': 200,
  'special-attack': 180,
  'special-defense': 200,
  'speed': 200,
};

const statNameMap: Record<string, string> = {
  'hp': 'HP',
  'attack':'Attack',
  'defense': 'Defense',
  'special-attack': 'SP Attack',
  'special-defense': 'SP Defense',
  'speed': 'Speed',
};

export const getMaxStatByName = (name: string): number => maxStatsMap[name];
export const getStatNameByName = (name: string): string => statNameMap[name] || '-';

export default maxStatsMap;
