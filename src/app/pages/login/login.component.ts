import { Component } from '@angular/core';
import { PasswordService } from 'src/app/services/password.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  user: string = '';
  logged: boolean = false;
  spinnerTrue: boolean = false;
  showPassword:boolean = false

  constructor(private loginService: LoginService, private PasswordService:PasswordService) {
  }
  async Login() {
    try {
      this.spinnerTrue = true;
      await this.loginService.Login(this.email, this.password);
      this.spinnerTrue = false;
    } catch (error) {
      this.spinnerTrue = false;
    }
  }

    ShowPassword(){
      this.showPassword = this.PasswordService.showPassword
      this.PasswordService.ShowPassword()
    }

}
