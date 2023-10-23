import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lines-display-item',
  templateUrl: './lines-display-item.component.html',
  styleUrls: ['./lines-display-item.component.css']
})
export class LinesDisplayItemComponent implements OnInit {
  @Input() description:string = ""; // Propiedad de entrada para recibir las descripciones desde el componente padre
  @Input() coordinatesBusLine:[][] =[];
  @Input() about:string = "";
  @Input() title:string = ""; 
  @Output() coordinateUpdated = new EventEmitter<[number, number]>();
  nuevaDireccion:string =""
  ngOnInit(): void {

  }
   
  replaceDirection(){
    let  partes = this.title.split(' ');
    this.nuevaDireccion = partes.slice(1).join(' ');
  }
  
  setView(){
    let f = [this.coordinatesBusLine[1],this.coordinatesBusLine[0] ]
    let latitud = this.coordinatesBusLine[1];
    let longitud = this.coordinatesBusLine[0];
        const newCoordinate: [any, any] = [latitud, longitud]; // Define tu nueva coordenada aquí
    this.coordinateUpdated.emit(newCoordinate);
   
  }
}
