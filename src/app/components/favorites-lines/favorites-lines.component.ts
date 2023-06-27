import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-favorites-lines',
  templateUrl: './favorites-lines.component.html',
  styleUrls: ['./favorites-lines.component.css']
})
export class FavoritesLinesComponent implements OnInit {
  favoritesLines:any [] = []
constructor(private http:HttpClient,private auth:AuthService){}
  ngOnInit(){
 
    this.getFavoritesLines()
  }

  getFavoritesLines(){
    this.http.get<any>(`http://localhost:3000/api/LinesFavorites/${this.auth.getUserId()}`).subscribe((res) =>{
      console.log(res)
      this.favoritesLines = [...res]
  })
  }

  deleteLine(idLine:any){
    console.log(idLine)
    this.http.delete(`http://localhost:3000/api/LinesFavorites/Delete/${idLine}`).subscribe((res) =>{
    console.log(res)
    this.getFavoritesLines()
    })

  }
  
}
