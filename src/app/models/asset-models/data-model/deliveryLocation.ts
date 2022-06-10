import { ILocation, Location } from '../../location/location';

export interface IDeliveryLocation {
    _id: string;
    name: string;
    location: ILocation;
    isActive: boolean;
    price: number;
    isImportant: boolean;
}

export class DeliveryLocation implements IDeliveryLocation {
    _id: string;
    name = '';
    location = new Location();
    isActive = true;
    price = 0;
    isImportant = false;
}
