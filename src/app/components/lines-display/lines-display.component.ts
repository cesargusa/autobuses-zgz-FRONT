import { Component, Input } from '@angular/core';
import { BusLine } from 'src/app/model/bus-line';
import { BusLineInfo } from 'src/app/model/bus-line-info';
import { BusLineInfoResult } from 'src/app/model/bus-line-result';

@Component({
  selector: 'app-lines-display',
  templateUrl: './lines-display.component.html',
  styleUrls: ['./lines-display.component.css']
})
export class LinesDisplayComponent {
  @Input() about: string[] | undefined;
  @Input() descriptions: string[] | undefined; // Propiedad de entrada para recibir las descripciones desde el componente padre
  @Input() spinnerLines: boolean | undefined; // Propiedad de entrada para recibir las descripciones desde el componente padre
  @Input() busLines: BusLineInfoResult[] | undefined;
}
