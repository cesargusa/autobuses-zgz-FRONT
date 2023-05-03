import { Component, OnInit,HostListener   } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isUserMenuOpen = false;
userName:string = ''
logged:boolean = false
  constructor(private auth:AuthService) { 
      this.userName = this.auth.getUserName()
     
  }


  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  //Funcion para desplegar el submenu
  changeMenuProfile() {
    let menuProfile = document.getElementById('dropdownUserMenuLink')
    let subMenuProfile = document.getElementById('subMenu')
    menuProfile?.classList.add('show')
    subMenuProfile?.classList.add('show')
  
  }

  //Funcion para quitar el menu desplegable
@HostListener('window:click', ['$event'])
onWindowClick(event: Event) {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const dropdownUserMenuLink = document.querySelector('#dropdownUserMenuLink');

  if (dropdownMenu && dropdownMenu.classList.contains('show') && !dropdownUserMenuLink?.contains(event.target as Node)) {
    dropdownMenu.classList.remove('show');
  }
}

CloseSession(){
  this.auth.setUserName('')
  this.userName = ''
  this.auth.setLogged(false)
  this.logged = false
}
}
