import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <<<< import it here
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module'; // Importa AppRoutingModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ListBusLinesComponent } from './components/list-bus-lines/list-bus-lines.component';
import { AppTranslateModule } from './app.translate';
import { BusLineInfoComponent } from './components/bus-line-info/bus-line-info.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { FooterRegisterComponent } from './components/footer-register/footer-register.component';
import { ErrorComponent } from './pages/error/error-component.component';
import { AcceptTermsComponent } from './components/accept-terms/accept-terms.component';
import { LoginComponent } from './pages/login/login.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListBusLinesComponent,
    BusLineInfoComponent,
    RegisterComponent,
    FooterRegisterComponent,
    ErrorComponent,
    AcceptTermsComponent,
    LoginComponent,
    SpinnerComponent,
    
  ],
  imports: [RouterModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ToastrModule.forRoot(),
  AppTranslateModule,



  ],
  providers: [Router,{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
