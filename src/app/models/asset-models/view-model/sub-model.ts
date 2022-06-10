export interface ISubModel {
  _id: string;
  _makeId: string;
  _modelId: string;
  assetModelName: string;
  isActive: boolean;
  makeName: string;
  modifiedOn: string;
  subModelName: string;
}

export class SubModel implements ISubModel {
  '_id' = '';
  '_makeId' = '';
  '_modelId' = '';
  assetModelName = '';
  isActive: true;
  makeName = '';
  modifiedOn = '';
  subModelName = '';
}
