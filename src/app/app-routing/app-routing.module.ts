import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusLineInfoComponent } from '../components/bus-line-info/bus-line-info.component';
import { HomeComponent } from '../home/home.component';




// Define las rutas de tu aplicación
const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' }, // Redirigir a la ruta /inicio por defecto
    { path: 'Home', component: HomeComponent },
    {path: 'BusLineInfo/:lineId', component:BusLineInfoComponent}
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }