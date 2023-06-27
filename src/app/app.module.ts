import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <<<< import it here
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
import { FooterRegisterComponent } from './components/footer-register/footer-register.component';
import { ErrorComponent } from './pages/error/error-component.component';
import { AcceptTermsComponent } from './components/accept-terms/accept-terms.component';
import { LoginComponent } from './pages/login/login.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardBusComponent } from './components/card-bus/card-bus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegisterComponent } from './pages/register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModalIncidentsComponent } from './components/modal-incidents/modal-incidents.component';
import { FavoritesLinesComponent } from './components/favorites-lines/favorites-lines.component';
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
        FooterRegisterComponent,
        ErrorComponent,
        RegisterComponent,
        AcceptTermsComponent,
        LoginComponent,
        SpinnerComponent,
        CardBusComponent,
        PerfilComponent,
        ModalIncidentsComponent,
        FavoritesLinesComponent,
    ],
    providers: [
        Router,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent],
    imports: [
        RouterModule.forRoot([]),
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        MatButtonModule, 
        MatTooltipModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        ToastrModule.forRoot(),
        AppTranslateModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        NgIf,
        MatDialogModule,
        MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule
    ]
})
export class AppModule {}
