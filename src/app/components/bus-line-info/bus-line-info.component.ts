import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BusLineInfo } from 'src/app/model/bus-line-info';
import * as moment from 'moment'
@Component({
  selector: 'app-bus-line-info',
  templateUrl: './bus-line-info.component.html',
  styleUrls: ['./bus-line-info.component.css']
})
export class BusLineInfoComponent implements OnInit {

  lineId:string = ''
  busLineInfoCoordinates:BusLineInfo[] = []
  totalCount:number = 0
  lastUpdated:string = ''
  description:string = ''
  title:string = ''
  titleSort:string[] = []
    spinnerTrue:boolean = true
  constructor(private route: ActivatedRoute, private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.lineId = this.route.snapshot.paramMap.get('lineId') || '';
    if (!this.lineId) {
      this.router.navigate(["/"])

    } else {
      ; // aquí puedes hacer lo que necesites con el parámetro
    }

this.getLineInfo()
  }


  getLineInfo(){
    this.spinnerTrue=true
    const URL = `https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/transporte-urbano/linea-autobus/${this.lineId}`
      this.http.get<BusLineInfo>(URL)
      .subscribe({
        next: (data:BusLineInfo) =>{
          console.log(data)
          this.lastUpdated = moment(data.lastUpdated).format('DD/MM/YYYY hh:mm:ss')
          this.title = data.title.replace('.','-')
          this.spinnerTrue=false
          this.titleSort = this.title.split('-')
          
        }
      })
  }
migasPan(){

}

}
