import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
    showPassword: boolean = false;
    showPasswordRepeat: boolean = false;
  
    ShowPassword(){
        if(this.showPassword) this.showPassword = false
        else this.showPassword = true
      }
      ShowPasswordRepeat(){
        if(this.showPasswordRepeat) this.showPasswordRepeat = false
        else this.showPasswordRepeat = true
      }
}