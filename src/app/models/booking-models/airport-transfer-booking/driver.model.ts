export interface IDriverAT {
  firstName: string;
  lastName: string;
  telephone: string;
}

export class DriverAT implements IDriverAT {
  firstName = '';
  lastName = '';
  telephone = '';
}
