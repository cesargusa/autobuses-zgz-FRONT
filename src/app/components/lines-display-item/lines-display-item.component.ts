import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lines-display-item',
  templateUrl: './lines-display-item.component.html',
  styleUrls: ['./lines-display-item.component.css']
})
export class LinesDisplayItemComponent {
  @Input() description:string = ""; // Propiedad de entrada para recibir las descripciones desde el componente padre

}
