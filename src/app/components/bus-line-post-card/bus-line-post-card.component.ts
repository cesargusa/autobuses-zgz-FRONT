import { Component, Input, OnInit } from '@angular/core';
import { BusLineInfoResult } from 'src/app/model/bus-line-result';

@Component({
  selector: 'app-bus-line-post-card',
  templateUrl: './bus-line-post-card.component.html',
  styleUrls: ['./bus-line-post-card.component.css']
})
export class BusLinePostCardComponent implements OnInit {
  @Input() busLines: BusLineInfoResult[] | undefined;
  listaFiltrada: BusLineInfoResult[] = [];

  ngOnInit(): void {
  this.busLines?.forEach((item) =>{
    if(item.link != null) this.listaFiltrada.push(item);
  })
  }
}
