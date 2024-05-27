import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbDatepickerModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

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
import { PlantillaComponent } from './plantilla/plantilla.component';
import { TablaRankingComponent } from './tabla-ranking/tabla-ranking.component';
import { PrediccionesComponent } from './predicciones/predicciones.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { LoginMisterComponent } from './login-mister/login-mister.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    AdminPanelComponent,
    LoginPageComponent,
    FooterComponent,
    HistorialUsuariosComponent,
    RegisterComponent,
    AdminPanelComponent,
    UserPanelComponent,
    PageNotFoundComponent,
    ContactoComponent,
    PlantillaComponent,
    TablaRankingComponent,
    PrediccionesComponent,
    LoginMisterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
