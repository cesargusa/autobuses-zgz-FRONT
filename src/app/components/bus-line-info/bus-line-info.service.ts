import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BusLineInfo } from 'src/app/model/bus-line-info';

@Injectable({
  providedIn: 'root',
})

export class BusLineInfoService {
constructor(private http:HttpClient){}
GetLineInfo(lineId:string){
    const URL = `https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/transporte-urbano/linea-autobus/${lineId}`

    return this.http.get<BusLineInfo>(URL).pipe(
        map((res: BusLineInfo) => {
          if(res != null){
            console.log(res)
            return {
              lastUpdated: res.lastUpdated,
              totalCount: res.totalCount,
              description: res.description,
              title:res.title,
              about:res.about,
              result:res.result,
            };
          }else return null;
      
        })
      );
}




}