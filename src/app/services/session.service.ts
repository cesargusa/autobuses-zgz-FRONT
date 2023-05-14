import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})

export class SessionService {
    userName:string = ''
    logged:boolean = true
constructor(private auth:AuthService){}
    CloseSession() {
        this.auth.setUserName('');
        this.userName = '';
        this.auth.setLogged(false);
        this.logged = false;
        window.location.href = '/';
      }
     
} 