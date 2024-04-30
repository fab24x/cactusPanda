import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component'; // Importa RegisterComponent
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistorialUsuariosComponent } from './historial-usuarios/historial-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    HistorialUsuariosComponent,
    LoginPageComponent,
    RegisterComponent, // Agrega RegisterComponent a la lista de declaraciones
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule // Agrega ReactiveFormsModule a la lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
