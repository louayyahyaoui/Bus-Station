import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {BUS} from '../Data/user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {}

  fetchUsers(): Observable<any> {
    return of (BUS);
  }
}
