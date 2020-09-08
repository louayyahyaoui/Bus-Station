import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent {

  searchText: string;
  filters: Object;

  constructor() {}

}
