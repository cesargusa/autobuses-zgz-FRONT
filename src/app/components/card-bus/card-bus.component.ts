import { Component, Input } from '@angular/core';
import { BusLine } from 'src/app/model/bus-line';

@Component({
  selector: 'app-card-bus',
  templateUrl: './card-bus.component.html',
  styleUrls: ['./card-bus.component.css']
})
export class CardBusComponent {


  @Input() busLineId:string = '' 
  @Input() logged:boolean = false
  @Input() busLineFavorite:boolean = false
  @Input() busLine:string = ''
  // @Input() addFavourite: (busLine: string) => void = () => {};
  
}