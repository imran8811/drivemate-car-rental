export interface IUserDto {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  home: string;
  work: string;
  about: string;
  profilePicture: string;
  companyName: string;
  establishmentDate: string;
  taxNo: string;
  officialAddress: string;
  picture: string;
}

export class UserDto implements IUserDto {
  firstName = '';
  lastName = '';
  dateOfBirth = '';
  gender = '';
  home = '';
  work = '';
  about = '';
  profilePicture = '';
  companyName = '';
  establishmentDate = '';
  taxNo = '';
  officialAddress = '';
  picture = '';
}