export interface IBackupCar {
    _ownerId: string;
    _assetId: string;
    price: number;
  }
  
  export class BackupCar implements IBackupCar {
    _ownerId = '';
    _assetId = '';
    price = 0;
  }
  