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
    
  ],
  imports: [
    BrowserModule,
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
  AppTranslateModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
