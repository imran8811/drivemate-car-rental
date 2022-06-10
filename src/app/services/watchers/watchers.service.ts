import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WatchersService {

  isMenuVisibilityOnTop: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

}
