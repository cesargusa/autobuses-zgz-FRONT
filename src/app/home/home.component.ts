import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import SimpleBar from 'simplebar';
import { BusLineService } from '../services/bus-line.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  welcome: string = '';
  logged: boolean = false;
  busLineListArray: any[] = [];
  constructor(
    private titleService: Title,
    private auth: AuthService,
    private busLineList: BusLineService
  ) {
    this.titleService.setTitle('Autobuses de Zaragoza');
    this.logged = this.auth.getLogged();
    this.busLineListArray = this.busLineList.getBusLines();
  }

  ngOnInit(): void {
    const element = document.querySelector('[data-simplebar]');
    if (element instanceof HTMLElement) {
      new SimpleBar(element);
    }
  }

  changeLineBusTab(tab: string) {
    let lineBusTab = document.getElementById('lineBusTab');
    let favoritesTab = document.getElementById('favoritesTab');
    let linesBusContent = document.getElementById('linesBusContent');
    let linesFavoriteContent = document.getElementById('linesFavoriteContent');
    if (tab === 'lineBusTab') {
      //Eliminar clases
      favoritesTab?.classList.remove('active');
      lineBusTab?.classList.remove('active');
      lineBusTab?.classList.add('active');
      //Mostrar Contenido
      linesFavoriteContent?.classList.remove('show', 'active');
      linesBusContent?.classList.add('show', 'active');
    } else {
      lineBusTab?.classList.remove('active');
      favoritesTab?.classList.add('active');

      //Mostrar Contenido
      linesBusContent?.classList.remove('show', 'active');
      linesFavoriteContent?.classList.add('show', 'active');
    }
  }
}
