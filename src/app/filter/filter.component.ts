import { Component, OnInit } from '@angular/core';
import {BusStation} from './bus-station';
import {FilterService} from './filter.service';

@Component({
  selector: 'bs-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent implements OnInit {

  saerchName: string = '';
  listBus: BusStation[] = [];


  constructor(private fs: FilterService) { }

  ngOnInit(): void {
    this.listBus = this.fs.getFilter();
  }

}
