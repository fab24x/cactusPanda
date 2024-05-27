import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {

  constructor(private authService: AuthService) {}
  // user: any;

  // ngOnInit(): void {
  //   this.authService.getUser().subscribe(
  //     data => {
  //       this.user = data.user;
  //       console.log('Usuario autenticado:', this.user);
  //     },
  //     error => {
  //       console.error('Error al obtener el usuario:', error);
  //     }
  //   );
  // }

  nombre = localStorage.getItem('nombre');
}
