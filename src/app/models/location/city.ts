import { IPlace } from './place';

export interface ICity {
  _id: string;
    name: string;
    code: string;
    sortingIndex: number;
    isActive: boolean;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;

  places: IPlace[];
}

export class City implements ICity {
  '_id': string;
    name = '';
    code: string;
    sortingIndex: number;
    isActive = true;
    published = true;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;

  places: IPlace[];
}

