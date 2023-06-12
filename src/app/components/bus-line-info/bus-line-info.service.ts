import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BusLineInfo } from 'src/app/model/bus-line-info';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class BusLineInfoService {
constructor(private http:HttpClient, private router:Router,private route: ActivatedRoute){}
GetLineInfo(lineId:string){
    const URL = `https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/transporte-urbano/linea-autobus/${lineId}`
    console.log(URL)
    return this.http.get<BusLineInfo>(URL).pipe(
        map((res: BusLineInfo) => {
          return {
            lastUpdated: res.lastUpdated,
            totalCount: res.totalCount,
            description: res.description,
            title:res.title,
            result:res.result
            
          };
        })
      );
}

    //   .subscribe({
    //     next: (data:BusLineInfo) =>{
    //       return {  lastUpdated = moment(data.lastUpdated).format('DD/MM/YYYY hh:mm:ss')
    //       this.title = data.title.replace('.','-')
    //       this.spinnerTrue=false
    //       this.titleSort = this.title.split('-')}
        
          
        
      



}