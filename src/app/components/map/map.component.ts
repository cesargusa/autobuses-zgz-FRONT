import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { Icon } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{
  @Input() coordinates:number[][] = [];
  receivedCoordinate: [any, any] = [0, 0];

  private map: any;
  ngAfterViewInit(): void {
    this.initMap();
  }
  onCoordinateUpdated(coordinate: [number, number]) {
    this.receivedCoordinate = coordinate;
  }
  private initMap(): void {


    if(this.coordinates != null && this.coordinates.length > 0){
      this.map = L.map('map', {
        center: [this.coordinates[0][1],this.coordinates[0][0]],
        zoom: 12
      });
  
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
 
      const customIcon = new Icon({
        iconUrl: 'assets/images/icons/parada-de-autobus.png', // Ruta a tu icono personalizado
        iconSize: [40, 40], // Tamaño del icono (ancho x alto)
        iconAnchor: [22, 32], // Punto de anclaje del icono (por defecto, centro inferior)
      });
      const firstCoordinate = this.coordinates[0];
      const lastCoordinate = this.coordinates[this.coordinates.length - 1];

      const latlngs = [
        L.latLng(firstCoordinate[1], firstCoordinate[0]),
        L.latLng(lastCoordinate[1], lastCoordinate[0])
      ];

      this.coordinates.forEach(element => {
        L.marker([element[1], element[0]], { icon: customIcon }).addTo(this.map);
  
        const latlng: L.LatLng = L.latLng(element[1], element[0]);
        latlngs.push(latlng);
  

      });

           L.polyline(latlngs, { color: '#2D3436' }).addTo(this.map);
      tiles.addTo(this.map);
    }
    }
   
}
