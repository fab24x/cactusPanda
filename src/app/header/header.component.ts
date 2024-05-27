import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  haIniciadoSesion = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.haIniciadoSesion = loggedIn;
    });
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
