import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusLineService {
  private busLines: any[] = [];

  constructor() {
    const storedBusLines = localStorage.getItem('busLines');
    if (storedBusLines) {
      this.busLines = JSON.parse(storedBusLines);
    }
  }

  setBusLines(lines: any[]): void {
    this.busLines = lines;
    localStorage.setItem('busLines', JSON.stringify(lines));
    console.log(this.busLines);
  }

  getBusLines(): any[] {
    console.log(this.busLines);
    return this.busLines;
  }
}
