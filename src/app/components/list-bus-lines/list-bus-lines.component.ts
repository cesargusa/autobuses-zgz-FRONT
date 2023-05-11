import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusLine } from '../../model/bus-line';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import FavoriteLines from 'src/app/model/favoriteLines';
import { BusLineService } from 'src/app/services/bus-line.service';

@Component({
  selector: 'app-list-bus-lines',
  templateUrl: './list-bus-lines.component.html',
  styleUrls: ['./list-bus-lines.component.css'],
})
export class ListBusLinesComponent implements OnInit {
  busLinesString: any[] = [];
  allBusLines: any[] = [];
  busLines: any[] = [];
  favoritesLines: any[] = [];
  totalCount: number = 0;
  busLineValue: string = '';
  spinnerTrue: boolean = true;
  errorLines = false;
  logged: boolean = false;
  userId: number = 0;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private auth: AuthService,
    private busLineList: BusLineService
  ) {
    this.logged = auth.getLogged();
  }
  // userName:string = this.auth.userName

  ngOnInit(): void {






    if (this.auth.getLogged() == true) {
      this.userId = this.auth.getUserId();
      this.http
        .get<any>(`http://localhost:3000/api/LinesFavorites/${this.userId}`)
        .subscribe((res) => {
          res.forEach((line: any) => {
            this.favoritesLines.push(line.NumberLine);
          });
        });
    }
    //Llama al cargar la pagina por primera vez
    this.getData();

    // this.favoritesLines.forEach(element => {
    //   if(element.NumberLine == )
    // });
  }
  getData() {
const URL =
      'https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/transporte-urbano/linea-autobus';
         this.spinnerTrue = true;
   
    
 
    this.http.get<BusLine>(URL).subscribe({
      next: (data: BusLine) => {
        this.busLinesString = data.result;
        if(this.auth.getLogged() == true){
        //     this.busLinesString.forEach((element) => {
        
        //   this.busLines.push({id:element.slice(96, element.length).replace('_', ' ')});
        //   this.busLines.sort();
   
        // });
        this.busLinesString.forEach(element => {
          if(this.favoritesLines.includes(element.slice(96, element.length).replace('_', ' '))){
            this.busLines.push({id:element.slice(96, element.length).replace('_', ' '),favorite:true})
          }else{
            this.busLines.push({id:element.slice(96, element.length).replace('_', ' '),favorite:false})

          }

        });
      
        }else{
          this.busLinesString.forEach(element => {
            this.busLines.push({id:element.slice(96, element.length).replace('_', ' '),favorite:false})
       
  
            
          });
        }
        this.allBusLines = this.busLines.slice(); // Hacer una copia de la lista completa
        this.totalCount = data.totalCount;
        this.spinnerTrue = false;
        this.busLineList.setBusLines(this.busLines)

      },
      error: (error) => {
        this.spinnerTrue = false;
        this.errorLines = true;
      },
    });
    console.log(this.busLines)
    console.log(this.busLinesString)
  }

  filterBusLines() {
    this.spinnerTrue = true;
    this.busLines = this.allBusLines.slice(); // Restaurar la lista completa

    this.busLines = this.allBusLines.filter((busLine) =>
      busLine.id.toLowerCase().includes(this.busLineValue.toLowerCase())
    );
    this.spinnerTrue = false;
  }

  addFavourite(id: string) {
    this.addFavoriteLine(id);
    let favouriteIcon = document.getElementById(`favouriteIcon${id}`);

  
      if (favouriteIcon?.classList.contains('mdi-heart-outline')) {
        favouriteIcon?.classList.remove('mdi-heart-outline');
        favouriteIcon?.classList.add('mdi-heart');
        this.toastr.success(`Linea ${id} añadida a favoritos.`, 'Añadida', {
          positionClass: 'toast-bottom-left',
          timeOut: 2000,
        });
      } else {
        favouriteIcon?.classList.remove('mdi-heart');
        favouriteIcon?.classList.add('mdi-heart-outline');
        this.toastr.error(`Linea ${id} eliminada de favoritos.`, 'Eliminada', {
          positionClass: 'toast-bottom-left',
          timeOut: 2000,
        });
      }
    
   
  }

  addFavoriteLine(id: string) {
    const URL = `${environment.urlBack}/api/LinesFavorites/Create`;
    const body = {
      NumberLine: id,
      UrlLine: `https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/transporte-urbano/linea-autobus/${id}`,
      IdUser: this.auth.getUserId(),
    };
    this.http.post(URL, body).subscribe((res) => {
    });
  }
}
