export interface ILocation {
  coordinates: number[];
  type: string;
}

export class Location implements ILocation {
  coordinates = [0, 0];
  type = '';
}
