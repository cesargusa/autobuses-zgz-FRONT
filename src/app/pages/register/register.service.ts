import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import RegisterModel from 'src/app/model/register';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  errorPassword: boolean = false;
  spinnerCreate: boolean = true;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}
  async CreateUserService(
    user: string,
    email: string,
    password: string,
    repeatPassword: string
  ):Promise<RegisterModel> {
    this.spinnerCreate = false;
    const URL = `${environment.urlBack}/api/Users/CreateUser`;
    const body = {
      Email: email,
      UserName: user,
      Password: password,
      CreateDate: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
      LastConnection: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
      IsActive: true,
    };

    return new Promise((resolve, reject) => {
      if (password === repeatPassword) {
        this.errorPassword = false;
        this.http.post<RegisterModel>(URL, body).subscribe(
          (res) => {
            this.toastr.success(
              `Se ha creado el Usuario correctamente`,
              'Usuario Creado',
              {
                positionClass: 'toast-bottom-left',
                timeOut: 2000,
              }
            );
            resolve(res)
            this.spinnerCreate = true;
            this.router.navigate(['/Login']);
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
            this.spinnerCreate = true;
          }
        );
      } else {
        this.errorPassword = true;
        this.spinnerCreate = true;
      }
    });
  }

  ChangePasswordService(password: string, repeatPassword: string) {
    if (password === repeatPassword) this.errorPassword = false;
    else this.errorPassword = true;
  }
}
