import { Component, OnInit,HostListener   } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isUserMenuOpen = false;
  constructor() { }

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
}
