export interface ITopDestinations {
    _id: string;
    name: string;
    createdOn: string;
}

export class TopDestinations implements ITopDestinations {
    _id = '';
    name = '';
    createdOn = '';
}