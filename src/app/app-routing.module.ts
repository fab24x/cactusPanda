import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
<<<<<<< Updated upstream

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginPageComponent}
=======
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HistorialUsuariosComponent } from './historial-usuarios/historial-usuarios.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { ExamenComponent } from './examen/examen.component';
import { Examen2formatopcComponent } from './examen2formatopc/examen2formatopc.component';
import { TablaRankingComponent } from './tabla-ranking/tabla-ranking.component';
import { PrediccionesComponent } from './predicciones/predicciones.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'predicciones', component: PrediccionesComponent},
  {path: 'ranking', component: TablaRankingComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'examen2formatopc/:id', component: Examen2formatopcComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'admin-panel/historial-usuarios', component: HistorialUsuariosComponent},
  {path: 'admin-panel/gestion-usuarios', component: GestionUsuariosComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], //https://medium.com/@jsmuster/enrutamiento-de-angular-en-5-minutos-spanish-dfbadc2c1cb7
  exports: [RouterModule]
})
export class AppRoutingModule { }
