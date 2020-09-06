import {Component, Input, OnInit} from '@angular/core';
import {Bus} from './bus';

@Component({
  selector: 'bs-bus-start',
  templateUrl: './bus-start.component.html',
  styles: [
  ]
})
export class BusStartComponent implements OnInit {

  @Input() bus: Bus;
  @Input() busId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
