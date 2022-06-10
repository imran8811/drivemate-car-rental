export interface IDocument {
  code: string;
  displayName: string;
  name: string;
  isVerified: boolean;
  path: string;
}

export class Document implements IDocument {
  code = '';
  displayName = '';
  name = '';
  isVerified = false;
  path = '';
}
