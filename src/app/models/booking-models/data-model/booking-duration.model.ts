export interface IBookingDuration { 
    rentalCategoryCode: string;
    duration: number; 
    durationUnit: string;
}

export class BookingDuration implements IBookingDuration {
    rentalCategoryCode = '';
    duration = 0;
    durationUnit = '';
}


export interface IConfigurations {
    configuration: IDefaultBookingDuration
  }

  export class Configurations implements IConfigurations {
    configuration = new DefaultBookingDuration(); 
  }

  export interface IDefaultBookingDuration{
    defaultBookingDuration: IBookingDuration[];
  }

  export class DefaultBookingDuration implements IDefaultBookingDuration {
    defaultBookingDuration = []
  };