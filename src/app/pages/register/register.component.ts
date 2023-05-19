import { Component } from '@angular/core';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private registerService:RegisterService) {}

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
    this.registerService.CreateUserService(this.user,this.email,this.password,this.repeatPassword)
  }

  ChangePassword(){
  this.registerService.ChangePasswordService(this.password,this.repeatPassword)
  }
}
