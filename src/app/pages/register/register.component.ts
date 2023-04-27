import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  user: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  errorPassword:boolean=false
  ngOnInit(): void {
    //Llama al cargar la pagina por primera vez
  }

  CreateUser() {
    const URL = `${environment.urlBack}/api/Users/CreateUser`;
    console.log(this.user);
    const body = {
      Email: this.email,
      UserName: this.user,
      Password: this.password,
      CreateDate: '2020-12-22 20:20:20',
      LastConnection: '2020-12-22 20:20:20',
      IsActive: true,
    };
    if (this.password === this.repeatPassword) {
this.errorPassword=false
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
        }
      ,

      (err) => {
        this.toastr.error(
          `Error al Crear, ya existe un Nombre de Usuario o un Email`,
          'Error al Crear',
          {
            positionClass: 'toast-bottom-left',
            timeOut: 2000,
          }
        );
      }
    );
  }else{
this.errorPassword=true
  }
  }
}
