import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autobuses-zgz-front';
  constructor(private translate: TranslateService) {
    // Configuración del idioma predeterminado
    translate.setDefaultLang('es');
  
    // Carga de archivos de traducción
    translate.addLangs(['en', 'es']);
  
    // Obtener el idioma del navegador
    const browserLang = translate.getBrowserLang();
  
    if (browserLang) {
      translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
    } else {
      translate.use('es');
    }
  }
  
}
