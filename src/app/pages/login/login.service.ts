import { Injectable } from '@angular/core';
import LoginModel from 'src/app/model/login';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  Login(email: string, password: string): Promise<LoginModel> {
    return new Promise<LoginModel>((resolve, reject) => {
      const URL = `${environment.urlBack}/api/users/Login`;
      const body = {
        email,
        password,
      };

      this.http.post<LoginModel>(URL, body).subscribe(
        (res) => {
          if (res.succes == true) {
            const URL2 = `${environment.urlBack}/api/users/UpdateUser/${res.idUser}`;
            const bodyPutLastConnection = {
              LastConnection: moment().format('YYYY-MM-DD HH:mm:ss'),
            };

            this.http.put(URL2, bodyPutLastConnection).subscribe();
            console.log(
              moment(bodyPutLastConnection.LastConnection).format(
                'YYYY-MM-DD HH:mm:ss'
              )
            );

            this.auth.setUserName(res.userName);
            this.auth.setLogged(res.succes);
            this.auth.setUserId(Number(res.idUser));

            this.router.navigate(['/']);
            resolve(res); // Resuelve la promesa con el resultado del inicio de sesión
          } else {
            this.toastr.error(
              `Email o Contraseña Incorrectas`,
              'Fallo al iniciar sesión',
              {
                positionClass: 'toast-bottom-left',
                timeOut: 2000,
              }
            );
            reject(new Error('Email o Contraseña Incorrectas')); // Rechaza la promesa con un error
          }
        },
        (error) => {
          reject(error); // Rechaza la promesa con el error recibido desde la solicitud HTTP
        }
      );
    });
  }
}
