import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'bs-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnChanges, OnInit {
  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
  buses: any[] = [];
  filteredBus: any[] = [];
  constructor(private userService: UserService,
              private ref: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.loadUsers();
  }
  ngOnChanges(): void {
    if (this.groupFilters) { this.filterUserList(this.groupFilters, this.buses); }
  }
  filterUserList(filters: any, users: any): void {
    this.filteredBus = this.buses; // Reset User List
    const keys = Object.keys(filters);
    const filterUser = user => {
      let result = keys.map(key => {
        if (!~key.indexOf('time')) {
          if (user[key]) {
            return String(user[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
          } else {
            return false;
          }
        }
      });
// To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
      result = result.filter(it => it !== undefined);
// Filter the Age out from the other filters
      if (filters['timeto'] && filters['timefrom']) {
        if (user['time']) {
          if (+user['time'] >= +filters['timefrom'] && +user['time'] <= +filters['timeto']) {
            result.push(true);
          } else {
            result.push(false);
          }
        } else {
          result.push(false);
        }
      }
      return result.reduce((acc, cur: any) => { return acc & cur }, 1);
    };
    this.filteredBus = this.buses.filter(filterUser);
  }
  loadUsers(): void {
    this.userService.fetchUsers()
      .subscribe(users => this.buses = users);
    this.filteredBus = this.filteredBus.length > 0 ? this.filteredBus : this.buses;
  }
}
