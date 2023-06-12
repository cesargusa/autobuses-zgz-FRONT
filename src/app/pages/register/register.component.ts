import { Component } from '@angular/core';
import { PasswordService } from 'src/app/services/password.service';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private registerService:RegisterService, private passwordService:PasswordService) {

    this.passwordService.showPassword = false
  }

  user: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  errorPassword: boolean = false;
  spinnerCreate:boolean = true;
  showPassword:boolean = false
  showPasswordRepeat:boolean = false
  ngOnInit(): void {
    //Llama al cargar la pagina por primera vez
  }

  async CreateUser() {
    this.spinnerCreate = false
    await this.registerService.CreateUserService(this.user,this.email,this.password,this.repeatPassword)
    this.spinnerCreate = true
  }

  ChangePassword(){
  this.registerService.ChangePasswordService(this.password,this.repeatPassword)
  }
  ShowPassword(){
    this.showPassword = this.passwordService.showPassword
    this.passwordService.ShowPassword()
  }

  ShowPasswordRepeat(){
    this.showPasswordRepeat = this.passwordService.showPasswordRepeat
    this.passwordService.ShowPasswordRepeat()


  }
}
