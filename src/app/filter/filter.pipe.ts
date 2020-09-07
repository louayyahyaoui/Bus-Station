import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, sName: string): any {
    if (sName === "") {
      return value;
    }
    else {
      console.log(value);
      console.log(sName);
      const busArray: any[] = [];
      for (let i = 0; i < value.length; i++) {
        const country: string = value[i].country;
        const station: string = value[i].station;
        if (country.toLowerCase().startsWith(sName.toLowerCase()) || station.toLowerCase().startsWith(sName.toLowerCase())) {
          busArray.push(value[i]);
        }
      }
      return busArray;
    }
  }

}
