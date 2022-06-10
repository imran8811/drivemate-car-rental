export interface IConfigurationTypeValue {
  _id: string;
  name: string;
  isActive: boolean;
  displayName: string;
  description: string;
  code: string;
  additionalInfo: any;
}

export interface IConfigurationType {
  isActive: boolean;
  lookups: IConfigurationTypeValue[];
  _id: string;
  typeCode: string;
  typeDescription: string;
  typeDisplayName: string;
  typeName: string;

}

export class ConfigurationType implements IConfigurationType {
  isActive = true;
  lookups = [];
  _id: string;
  typeCode = '';
  typeDescription = '';
  typeDisplayName = '';
  typeName = '';
}
