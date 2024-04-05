import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HistorialUsuariosComponent } from './historial-usuarios/historial-usuarios.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'admin-panel/historial-usuarios', component: HistorialUsuariosComponent},
  {path: 'admin-panel/gestion-usuarios', component: GestionUsuariosComponent},
  {path: 'admin-panel/**', redirectTo: 'admin-panel'},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})], //https://medium.com/@jsmuster/enrutamiento-de-angular-en-5-minutos-spanish-dfbadc2c1cb7
  exports: [RouterModule]
})
export class AppRoutingModule {

}
