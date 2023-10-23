import { Component, Input, OnInit } from '@angular/core';
import { BusLineInfoResult } from 'src/app/model/bus-line-result';

@Component({
  selector: 'app-bus-line-post',
  templateUrl: './bus-line-post.component.html',
  styleUrls: ['./bus-line-post.component.css']
})
export class BusLinePostComponent implements OnInit{
  @Input() spinnerLines: boolean | undefined; // Propiedad de entrada para recibir las descripciones desde el componente padre
  @Input() busLines: BusLineInfoResult[] | undefined;

    ngOnInit(): void {
    }
}
