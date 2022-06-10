export interface IModel {
  _id: string;
  _makeId: string;
  assetModelName: string;
  isActive: boolean;
  makeName: string;
  modifiedOn: string;
}

export class Model implements IModel {
  '_id' = '';
  '_makeId' = '';
  assetModelName = '';
  isActive: true;
  makeName = '';
  modifiedOn = '';
}
