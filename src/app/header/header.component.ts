import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  haIniciadoSesion = false;
  esAdministrador: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.haIniciadoSesion = loggedIn;
    });
  }
  
  ngOnInit() {
    // Usar isLoggedIn para suscribirse al estado de autenticación
    this.authService.isLoggedIn().subscribe(isLoggedIn => {
      this.haIniciadoSesion = isLoggedIn;
      if (this.haIniciadoSesion) {
        this.authService.getRolUsuario().subscribe(rol => {
          this.esAdministrador = (rol === 'admin');
        });
      }
    });
  }
  cerrarSesion() {
    this.authService.logout();
  }
}
