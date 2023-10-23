import { Component, Inject, OnInit } from '@angular/core';
import { ModalIncidentsComponent } from '../modal-incidents/modal-incidents.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { BusLineInfo } from 'src/app/model/bus-line-info';
import { BusLinePostInfo } from 'src/app/model/bus-line-post-info';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-info-post',
  templateUrl: './modal-info-post.component.html',
  styleUrls: ['./modal-info-post.component.css']
})
export class ModalInfoPostComponent implements OnInit {
  destinos:any[] = [];
  linePostInfo:BusLinePostInfo[] = [];
  lastUpdatedLinePost:string = '';
constructor(@Inject(MAT_DIALOG_DATA) public data: any,  public dialogRefModal: MatDialogRef<ModalInfoPostComponent>, private http:HttpClient) {

}

ngOnInit(): void {
  this.getDataPostLine()
}
onClosePostModal(): void {
  this.dialogRefModal.close();
}


getDataPostLine(){
 let idPost = this.convertAboutToLine()

  let URL = `https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/transporte-urbano/poste-autobus/${idPost}`;

  this.http.get<BusLinePostInfo>(URL).subscribe((item) =>{
    this.lastUpdatedLinePost = moment(item.lastUpdated).format('D/MM/YYYY hh:mm:ss') ;
    this.destinos = item.destinos;
    console.log(item.destinos)
  })
}

convertAboutToLine(){
 let splitDivisionPost = this.data.about.split("/")
 const idPost = splitDivisionPost[splitDivisionPost.length - 1];
 return idPost;
}
}
