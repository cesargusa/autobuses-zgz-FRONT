import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PerfilService } from './perfil.service';
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
    private perfilService: PerfilService
  ) {
    this.userId = authService.getUserId();
  }

  ngOnInit(): void {
    this.GetPerfil();
  }

  GetPerfil() {
    this.perfilService.GetPerfilService().subscribe((res) => {
      this.email = res.email;
      this.username = res.username;
      this.password = res.password;
      this.createDate = res.createDate;
      this.lastConnection = res.lastConnection;
    });
  }

  SaveChanges() {
    this.perfilService.SaveChangesService(this.password);
  }

  DeleteUser() {
    this.perfilService.DeleteUser(this.username);
  }
}
