import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocaloSuperiorComponent } from './components/socalo-superior/socalo-superior.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoIdevComponent } from './components/logo-idev/logo-idev.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { MenuUlComponent } from './components/menu-ul/menu-ul.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SaludoInicioComponent } from './components/saludo-inicio/saludo-inicio.component';
import { BtnCtaComponent } from './components/btn-cta/btn-cta.component';
import { ImgPerfilInicioComponent } from './components/img-perfil-inicio/img-perfil-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    SocaloSuperiorComponent,
    HeaderComponent,
    LogoIdevComponent,
    LogoAPComponent,
    MenuUlComponent,
    InicioComponent,
    SaludoInicioComponent,
    BtnCtaComponent,
    ImgPerfilInicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
