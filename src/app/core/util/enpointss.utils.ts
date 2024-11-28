import { endpoints } from '@endpoints';
import { environment } from '@environment';


export const treatObjectValues = (object: string | number): string => (object === null || object === ' ' ? '' : object.toString());

export const getObjectValues = (object: Array<string | number> | undefined): string[] => {
  if (object) {
    return object.map(value => treatObjectValues(value));
  }

  return [];
};

export const endpointInterpolation = (
  baseUrl: string,
  endpoint: string,
  parameters: string[],
): string => {

  let interpolatedEndpoint = endpoint;

  for (const [index, parameter] of parameters.entries()) {
    interpolatedEndpoint = interpolatedEndpoint.replace(`{{${index}}}`, parameter);
  }

  return baseUrl + interpolatedEndpoint;
};

export const pokemonApiUrl = (url: string, parameters?: Array<string | number>): string => {
  return endpointInterpolation(environment.pokeapi, endpoints[url], getObjectValues(parameters));
};

