import { NgModule } from '@angular/core';
import { BrowserModule, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< Updated upstream
=======
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HistorialUsuariosComponent } from './historial-usuarios/historial-usuarios.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './footer/footer.component';
import { ExamenComponent } from './examen/examen.component';
import { Examen2formatopcComponent } from './examen2formatopc/examen2formatopc.component';
import { TablaRankingComponent } from './tabla-ranking/tabla-ranking.component';
import { PrediccionesComponent } from './predicciones/predicciones.component';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    LoginPageComponent,
<<<<<<< Updated upstream
    LoginComponent,
    RegisterComponent
=======
    FooterComponent,
    AdminPanelComponent,
    ExamenComponent,
    Examen2formatopcComponent,
    TablaRankingComponent,
    PrediccionesComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
