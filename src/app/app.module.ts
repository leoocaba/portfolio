import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocaloSuperiorComponent } from './components/socalo-superior/socalo-superior.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoIdevComponent } from './components/logo-idev/logo-idev.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { MenuUlComponent } from './components/menu-ul/menu-ul.component';

@NgModule({
  declarations: [
    AppComponent,
    SocaloSuperiorComponent,
    HeaderComponent,
    LogoIdevComponent,
    LogoAPComponent,
    MenuUlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
