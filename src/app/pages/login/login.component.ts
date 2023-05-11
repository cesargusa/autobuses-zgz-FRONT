import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import LoginModel from '../../model/login'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = ''
  password:string = ''
  user:string = ''
  logged:boolean = false
  spinnerTrue:boolean= false
  ngOnInit(): void {
    //Llama al cargar la pagina por primera vez
  }

  constructor(private http: HttpClient, private auth:AuthService, private router:Router, private toastr:ToastrService){}

  Login(){
    this.spinnerTrue=true
    const URL = `${environment.urlBack}/api/users/Login`

    const body = {
        email:this.email,
        password:this.password
    }
    this.http.post<LoginModel>(URL,body).subscribe((res) => {
      if(res.succes == true){
       const  URL2 = `${environment.urlBack}/api/users/UpdateUser/${res.idUser}`
        const bodyPutLastConnection = {LastConnection:moment().format('YYYY-MM-DDTHH:mm:ssZ')}
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
