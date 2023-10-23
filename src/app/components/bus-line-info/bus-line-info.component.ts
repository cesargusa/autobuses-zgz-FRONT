import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BusLineInfo } from 'src/app/model/bus-line-info';
import * as moment from 'moment';

import { BusLineInfoService } from './bus-line-info.service';
import { BusLineInfoResult } from 'src/app/model/bus-line-result';
@Component({
  selector: 'app-bus-line-info',
  templateUrl: './bus-line-info.component.html',
  styleUrls: ['./bus-line-info.component.css'],
})
export class BusLineInfoComponent implements OnInit {
  lineId: string = '';
  busLineInfoCoordinates: BusLineInfo[] = [];
  totalCount: number = 0;
  lastUpdated: string = '';
  description: string = '';
  title: string = '';
  about:string ="";
  titleSort: string[] = [];
  spinnerTrue: boolean = false;
  busLines:BusLineInfoResult[] = [];
  descriptions: string[] = [];
  spinnerLines: boolean = true;
  coordinates:number[][] =[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private busLineService: BusLineInfoService,
    
  ) {}

  ngOnInit(): void {
    this.lineId = this.route.snapshot.paramMap.get('lineId') || '';
    if (!this.lineId) {
      this.router.navigate(['/']);
    } else {
      // aquí puedes hacer lo que necesites con el parámetro
    }
    this.getLineInfo();
  }

  getLineInfo() {
    this.spinnerLines = true;
  
    this.busLineService.GetLineInfo(this.lineId).subscribe((res) => {
      if(res != null){
        this.busLines = res.result;
        this.totalCount = res.totalCount;
        this.lastUpdated = moment(res.lastUpdated).format('DD/MM/YYYY hh:mm:ss');
        this.description = res.description;
        this.title = res.title;
        this.about = res.about;
        this.descriptions = this.busLines.map(busLine => busLine.description);
        this.busLines.forEach(coordinate => {
          if(coordinate.geometry.type == "Point"){
            this.coordinates.push(coordinate.geometry.coordinates)
          }
        });
      } 
        else this.busLines = [];

  
      // Ahora que los datos se han cargado, establece spinnerLines en false.
        this.spinnerLines = false;
    });
  }
  
  migasPan() {}
}
