import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusLineService {
   busLines: any[] = [];

  setBusLines(lines: any[]) {
    this.busLines = lines;
    console.log(this.busLines)
  }

  
  getBusLines() {
    console.log(this.busLines)
    return this.busLines;
  }
}
