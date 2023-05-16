import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import LoginModel from '../../model/login'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = ''
  password:string = ''
  user:string = ''
  logged:boolean = false
  spinnerTrue:boolean= false
  ngOnInit(): void {}

  constructor(private loginService:LoginService){}

  Login(){
    this.loginService.Login(this.email,this.password)
  }
  
}
