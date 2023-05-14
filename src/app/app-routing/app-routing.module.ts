import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusLineInfoComponent } from '../components/bus-line-info/bus-line-info.component';
import { ErrorComponent } from '../pages/error/error-component.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../pages/register/register.component';
import { LoginComponent } from '../pages/login/login.component';
import { PerfilComponent } from '../pages/perfil/perfil.component';

// Define las rutas de tu aplicación
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' }, // Redirigir a la ruta /inicio por defecto
  { path: 'Home', component: HomeComponent },
  { path: 'BusLineInfo/:lineId', component: BusLineInfoComponent },
  { path: 'Register', component: RegisterComponent },
  {path: 'Login', component: LoginComponent},
  {path: 'Perfil', component: PerfilComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
