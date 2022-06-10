import { ILocation, Location } from './location';

export interface IPlace {
  _id: string;
  name: string;
  address: string;
  type: string;
  location: ILocation;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  isImportant: boolean;
  price: number;
}

export class Place implements IPlace {
  '_id' = '';
  name = '';
  address = '';
  type = '';
  location = new Location();
  isActive: true;
  createdAt = '';
  updatedAt = '';
  isImportant = false;
  price = 0;
}

