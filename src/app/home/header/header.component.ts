import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import {MatDialog} from '@angular/material/dialog';

import { ModalIncidentsComponent } from 'src/app/components/modal-incidents/modal-incidents.component';
import { PerfilComponent } from 'src/app/pages/perfil/perfil.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;
  isUserMenuOpen = false;
  userName: string = '';
  logged: boolean = false;
  openPerfilModal:boolean = false
  closeResult: string = '';


  constructor(private auth: AuthService, private sessionService:SessionService,public dialog: MatDialog) {
    this.userName = this.auth.getUserName();
  }

  ngOnInit(): void {
    // this.openModal()
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalIncidentsComponent, {
      panelClass: 'custom-dialog-container',
      height: '400px',
      width: '600px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal closed');
      // Realiza acciones después de que se cierre el modal si es necesario
    });
  }
  openModalPerfil() {
    const dialogRefP = this.dialog.open(PerfilComponent, {
      panelClass: 'custom-dialog-container',
      height: '600px',
      width: '600px',
      
    });

    dialogRefP.afterClosed().subscribe(result => {
      console.log('Modal closed');
      // Realiza acciones después de que se cierre el modal si es necesario
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  //Funcion para desplegar el submenu
  changeMenuProfile() {
    let menuProfile = document.getElementById('dropdownUserMenuLink');
    let subMenuProfile = document.getElementById('subMenu');
    menuProfile?.classList.add('show');
    subMenuProfile?.classList.add('show');
  }
  //Funcion para quitar el menu desplegable
  @HostListener('window:click', ['$event'])
  onWindowClick(event: Event) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownUserMenuLink = document.querySelector(
      '#dropdownUserMenuLink'
    );
    if (
      dropdownMenu &&
      dropdownMenu.classList.contains('show') &&
      !dropdownUserMenuLink?.contains(event.target as Node)
    ) {
      dropdownMenu.classList.remove('show');
    }
  }

  CloseSession() {
   this.sessionService.CloseSession()
  }
 
 
}
