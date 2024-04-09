import { NgModule } from '@angular/core';
import { BrowserModule, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HistorialUsuariosComponent } from './historial-usuarios/historial-usuarios.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './footer/footer.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    LoginPageComponent,
    FooterComponent,
    AdminPanelComponent,
    UserPanelComponent,
    PageNotFoundComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    ModalModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
