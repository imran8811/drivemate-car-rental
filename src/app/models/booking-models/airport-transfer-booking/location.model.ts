export interface ILocationAT {
  type: string;
  coordinates: number[];
}

export class LocationAT implements ILocationAT {
  type = '';
  coordinates = [0, 0];
}
