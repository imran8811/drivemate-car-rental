export interface IMake {
  _id: string;
  isActive: boolean;
  modifiedOn: string;
  name: string;
}

export class Make implements IMake {
  '_id' = '';
  isActive: true;
  modifiedOn = '';
  name = '';
}
