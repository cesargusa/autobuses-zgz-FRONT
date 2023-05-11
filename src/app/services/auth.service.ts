import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userName: string = '';
  public userId: number = 0;
  public logged:boolean = false
  constructor() {
    // Recupera el valor almacenado en el localStorage (si existe)
    const storedUserName = localStorage.getItem('userName');
    const storedLogged = localStorage.getItem('logged')
    const storageUserId = localStorage.getItem('userId')

    // Si hay un valor almacenado, lo asigna a la variable userName
    if (storedUserName) {
      this.userName = storedUserName;
    }
    if (storageUserId) {
      this.userId = parseInt(storageUserId);
    }
    if (storedLogged) {
      this.logged = JSON.parse(storedLogged)
    }
  }
  setUserId(id: number): void {
    // Establece el valor de la variable userName
    this.userId = id;

    // Guarda el valor en el localStorage
    localStorage.setItem('userId', id.toString());
  }

  getUserId(): number {
    // Retorna el valor de la variable userName
    return this.userId;
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
