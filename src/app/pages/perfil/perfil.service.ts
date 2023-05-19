import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import PerfilModel from 'src/app/model/perfil';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SessionService } from 'src/app/services/session.service';
@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  userId: number = 0;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private toastr: ToastrService,
    private sessionService: SessionService
  ) {
    this.userId = authService.getUserId();
  }

  GetPerfilService() {
    const URL = `${environment.urlBack}/api/Users/${this.userId}`;
    return this.http.get<PerfilModel>(URL).pipe(
      map((res: PerfilModel) => {
        return {
          email: res.Email,
          username: res.UserName,
          createDate: moment(res.CreateDate).format('DD/MM/yyyy HH:mm:ss'),
          lastConnection: moment(res.LastConnection).format(
            'DD/MM/yyyy HH:mm:ss'
          ),
          password: res.Password,
          isActive: res.IsActive,
        };
      })
    );
  }

  SaveChangesService(password: string) {
    const URL = `${environment.urlBack}/api/Users/UpdateUserPassword/${this.userId}`;
    const body = { Password: password };
    this.http.put(URL, body).subscribe(() => {
      this.toastr.success(`Contraseña cambiada`, 'Actualizada', {
        positionClass: 'toast-bottom-left',
        timeOut: 2000,
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    });
  }

  DeleteUser(userName: string) {
    const URL = `${environment.urlBack}/api/Users/DeleteUser/${this.userId}`;
    const bodyDelete = {
      IsActive: false,
    };
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Se eliminara el usuario por completo',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#F9375E',
      cancelButtonColor: '#727CF5',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.put(URL, bodyDelete).subscribe(() => {
          this.toastr.success(
            `Usuario ${userName} eliminado`,
            'Usuario eliminado',
            {
              positionClass: 'toast-bottom-left',
              timeOut: 2000,
            }
          );
          setTimeout(() => {
            this.sessionService.CloseSession();
            window.location.href = '/';
          }, 2000);
        });
      }
    });
  }
}
