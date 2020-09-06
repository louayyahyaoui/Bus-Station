import {Component, Input, OnInit} from '@angular/core';
import {Station} from './station';

@Component({
  selector: 'bs-station-start',
  templateUrl: './station-start.component.html',
  styles: [
  ]
})
export class StationStartComponent implements OnInit {

  @Input() station: Station;
  @Input() stationId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
