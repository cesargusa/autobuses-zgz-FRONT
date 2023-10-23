import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-favorites-lines',
  templateUrl: './favorites-lines.component.html',
  styleUrls: ['./favorites-lines.component.css']
})
export class FavoritesLinesComponent implements OnInit {
  favoritesLines:any [] = []
constructor(private http:HttpClient,private auth:AuthService, private toastr:ToastrService){}
  ngOnInit(){
 
    // this.getFavoritesLines()
  }

  getFavoritesLines(){
    this.http.get<any>(`${environment.urlBack}/api/LinesFavorites/${this.auth.getUserId()}`).subscribe((res) =>{
      this.favoritesLines = [...res]
  })
  }

  deleteLine(idLine:any,favoriteLine:any){
    this.http.delete(`${environment.urlBack}/api/LinesFavorites/Delete/${idLine}`).subscribe((res) =>{
      this.toastr.error(
        `Linea Eliminada Favoritos`,
        `Se ha eliminado correctamente la linea ${favoriteLine}`,
        {
          positionClass: 'toast-bottom-left',
          timeOut: 2000,
        }
      );
    this.getFavoritesLines()
    })

  }
  
}
