import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userName: string = '';
  public logged:boolean = false
  constructor() {
    // Recupera el valor almacenado en el localStorage (si existe)
    const storedUserName = localStorage.getItem('userName');
    const storedLogged = localStorage.getItem('logged')
    // Si hay un valor almacenado, lo asigna a la variable userName
    if (storedUserName) {
      this.userName = storedUserName;
    }
    if (storedLogged) {
      this.logged = JSON.parse(storedLogged)
    }
  }

  setUserName(name: string): void {
    // Establece el valor de la variable userName
    this.userName = name;

    // Guarda el valor en el localStorage
    localStorage.setItem('userName', name);
  }

  getUserName(): string {
    // Retorna el valor de la variable userName
    return this.userName;
  }
  setLogged(value: boolean): void {
    // Establece el valor de la variable success
    this.logged = value;

    // Guarda el valor en el localStorage
    localStorage.setItem('logged', JSON.stringify(value));
  }

  getLogged():boolean{
    return this.logged
  }
}

