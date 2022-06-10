export interface IDriver {
  firstName: string;
  lastName: string;
  telephone: string;
}

export class Driver implements IDriver {
  firstName = '';
  lastName = '';
  telephone = '';
}
