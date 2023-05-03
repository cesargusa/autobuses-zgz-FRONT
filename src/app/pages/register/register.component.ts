import { Component } from '@angular/core';
import {environment}  from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';

import * as moment from 'moment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient, private toastr: ToastrService, private router:Router) {}

  user: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  errorPassword: boolean = false;
  spinnerCreate:boolean = true;
  ngOnInit(): void {
    //Llama al cargar la pagina por primera vez
  }

  CreateUser() {
    this.spinnerCreate = false
    const URL = `${environment.urlBack}/api/Users/CreateUser`;
    console.log(moment().format('YYYY-MM-DDTHH:mm:ss'));
    console.log(this.user);
    const body = {
      Email: this.email,
      UserName: this.user,
      Password: this.password,
      CreateDate: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
      LastConnection: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
      IsActive: true,
    };
    if (this.password === this.repeatPassword) {
      this.errorPassword = false;
      this.http.post(URL, body).subscribe(
        (res) => {
          console.log('Creado');
          this.toastr.success(
            `Se ha creado el Usuario correctamente`,
            'Usuario Creado',
            {
              positionClass: 'toast-bottom-left',
              timeOut: 2000,
            }
          );
          this.spinnerCreate = true
          this.router.navigate(['/Login'])
        },
        (err) => {
          this.toastr.error(
            `Error al Crear, ya existe un Nombre de Usuario o un Email`,
            'Error al Crear',
            {
              positionClass: 'toast-bottom-left',
              timeOut: 2000,
            }
          );
          this.spinnerCreate = true
        }
      );
    } else {
      this.errorPassword = true;
      this.spinnerCreate = true

    }
  }

  ChangePassword(){
   
      if(this.password === this.repeatPassword) this.errorPassword = false
      else this.errorPassword = true
  }
}
