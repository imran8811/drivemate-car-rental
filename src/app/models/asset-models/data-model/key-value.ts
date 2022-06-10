export interface IKeyValue {
    code: string;
    displayName: string;
}

export class KeyValue implements IKeyValue {
    code = '';
    displayName = '';
}
