import { Injectable } from '@angular/core';
import LoginModel from 'src/app/model/login';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:string = ''
  logged:boolean = false
  spinnerTrue:boolean= false

  constructor(private auth:AuthService, private http:HttpClient, private toastr:ToastrService, private router:Router) { }

  Login(email:string,password:string){
    this.spinnerTrue=true
    const URL = `${environment.urlBack}/api/users/Login`

    const body = {
        email,
        password
    }
    this.http.post<LoginModel>(URL,body).subscribe((res) => {
      if(res.succes == true){
       const  URL2 = `${environment.urlBack}/api/users/UpdateUser/${res.idUser}`
        const bodyPutLastConnection = {
          LastConnection:moment().format('YYYY-MM-DD HH:mm:ss')
        }
        this.http.put(URL2,bodyPutLastConnection).subscribe()
        console.log(moment(bodyPutLastConnection.LastConnection).format('YYYY-MM-DD HH:mm:ss'))
        this.auth.setUserName(res.userName)
        this.auth.setLogged(res.succes)
        this.auth.setUserId(Number(res.idUser))
         this.router.navigate(['/'])
         this.spinnerTrue=false
      }else{
        this.toastr.error(`Email o Contraseña Incorrectas`, 'Fallo al iniciar sesión', { 
          positionClass: 'toast-bottom-left' ,
          timeOut: 2000
        });
        this.spinnerTrue=false
      }
    })
  }
}
