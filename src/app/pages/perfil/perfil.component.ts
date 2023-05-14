import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import PerfilModel from 'src/app/model/perfil';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SessionService } from 'src/app/services/session.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  userId: number = 0;
  email: string = '';
  createDate: string = '';
  lastConnection: string = '';
  username: string = '';
  password: string = '';
  isActive: boolean = false;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private toastr: ToastrService,
    private sessionService:SessionService
  ) {
    this.userId = authService.getUserId();
  }

  ngOnInit(): void {
    this.GetPerfil();
  }

  GetPerfil() {
    const URL = `${environment.urlBack}/api/Users/${this.userId}`;
    this.http.get<PerfilModel>(URL).subscribe((res) => {
      console.log(res);
      this.email = res.Email;
      this.username = res.UserName;
      this.createDate = moment(res.CreateDate).format('DD/MM/yyyy HH:mm:ss');
      this.lastConnection = moment(res.LastConnection).format(
        'DD/MM/yyyy HH:mm:ss'
      );
      this.password = res.Password;
      this.isActive = res.IsActive;
    });
  }

  SaveChanges() {
    const URL = `${environment.urlBack}/api/Users/UpdateUserPassword/${this.userId}`;
    const body = { Password: this.password };
      this.http.put(URL, body).subscribe(() => {
          this.toastr.success(`Contraseña cambiada`, 'Actualizada', {
            positionClass: 'toast-bottom-left',
            timeOut: 2000,
          });
          setTimeout(() => {
          window.location.href = '/'
          }, 2000);
      });
  }

  DeleteUser(){
   const URL = `${environment.urlBack}/api/Users/DeleteUser/${this.userId}`;
   const bodyDelete = {
     IsActive : false
   }
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Se eliminara el usuario por completo",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#F9375E',
      cancelButtonColor: '#727CF5',
      confirmButtonText: 'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.put(URL,bodyDelete).subscribe(() =>{
          this.toastr.success(`Usuario ${this.username} eliminado`, 'Usuario eliminado', {
            positionClass: 'toast-bottom-left',
            timeOut: 2000,
          });
          setTimeout(() => {
            this.sessionService.CloseSession()
          window.location.href = '/'
          }, 2000);
        })

        // Swal.fire(
        //   'Eliminado correctamente!',
        //   `El usuario <strong>${this.username}</strong> ha sido eliminado.`,
        //   'success'
        // )
      }
    })
  }
}
