export interface ILanguage {
    code: string;
    displayName: string;
  }

 
  export class Language implements ILanguage {
    code = '';
    displayName = '';
  }