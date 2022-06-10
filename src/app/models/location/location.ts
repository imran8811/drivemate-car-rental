export interface ILocation {
  _id: string;
  coordinates: number[];
  type: string;
}

export class Location implements ILocation {
  '_id' = '';
  coordinates = [0, 0];
  type = 'Point';
}
