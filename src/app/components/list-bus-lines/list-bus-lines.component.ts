import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusLine } from '../../model/bus-line';

@Component({
  selector: 'app-list-bus-lines',
  templateUrl: './list-bus-lines.component.html',
  styleUrls: ['./list-bus-lines.component.css'],
})
export class ListBusLinesComponent implements OnInit {
  busLinesString: any[] = [];
  allBusLines: any[] = [];
  busLines: any[] = [];
  totalCount: number = 0;
  busLineValue:string = ''
  spinnerTrue:boolean = true
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    
    //Llama al cargar la pagina por primera vez
    this.getData();
  }

  getData() {
    const URL ='https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/transporte-urbano/linea-autobus'
    this.spinnerTrue = true
    this.http
    .get<BusLine>(URL)
    .subscribe((data: BusLine) => {
      this.busLinesString = data.result;
      this.busLinesString.forEach((element) => {
        this.busLines.push(element.slice(96, element.length).replace('_', ' '));
        this.busLines.sort();

      });
      
      this.allBusLines = this.busLines.slice(); // Hacer una copia de la lista completa
      this.totalCount = data.totalCount;
      this.spinnerTrue=false
    });
  }

  filterBusLines() {
    this.spinnerTrue = true
    this.busLines = this.allBusLines.slice(); // Restaurar la lista completa

      this.busLines = this.allBusLines.filter((busLine) =>
        busLine.toLowerCase().includes(this.busLineValue.toLowerCase())
      );
      this.spinnerTrue = false
  }
}
