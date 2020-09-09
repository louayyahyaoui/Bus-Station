import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'bs-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .form-control {
        margin-bottom: 15px;
      }
    `
  ]
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  countries = [
    "Tunis",
    "Ariana",
    "Ben Arous",
    "Kasserine",
    "Mahdia",
  ];
  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  searchText: string = '';
  constructor(private fb: FormBuilder,
              private userService: UserService) {}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.form = this.fb.group({
      station: new FormControl(''),
      country: new FormControl(''),
      timefrom: new FormControl(''),
      timeto: new FormControl(''),

    });
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }

}
