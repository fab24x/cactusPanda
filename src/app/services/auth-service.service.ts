import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../models/LoginResponse';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.rutaApi}`;
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) { }

  private hasToken(): boolean {
    const token = localStorage.getItem('access_token');
    const expiresAt = localStorage.getItem('expires_at');
    if (!token || !expiresAt) {
      return false;
    }
    return new Date().getTime() < parseInt(expiresAt);
  }

  login(correo: string, pass: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}auth/login`, { correo, pass }).pipe(
      tap(response => {
        const expiresAt = (response.expires_in * 1000) + new Date().getTime();
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('expires_at', expiresAt.toString());
        this.loggedIn.next(true); // Emitir el nuevo estado de autenticación

        this.getUser().subscribe(
          data => {
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('nombre', data.user.nombre);
          },
          error => {
            console.error('Error al obtener el usuario:', error);
          }
        );
      })
    );
  }

  register(nombre_de_usuario: string, correo: string, pass: string, fecha_nacimiento: string, nombre: string, apellido: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}auth/register`, {
      nombre_de_usuario,
      correo,
      pass,
      fecha_nacimiento,
      nombre,
      apellido
    }).pipe(
      tap(response => {
        if (response.access_token) {
          const expiresAt = (response.expires_in * 1000) + new Date().getTime();
          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('expires_at', expiresAt.toString());
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('nombre', response.user.nombre);
          this.loggedIn.next(true);
          this.router.navigate(['/login-mister']);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user');
    localStorage.removeItem('nombre');
    this.loggedIn.next(false); // Emitir el nuevo estado de autenticación
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
  getRolUsuario(): Observable<string> {
    return this.http.get<{ role: string }>(`${this.apiUrl}/user-role`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      map(response => response.role)
    );
  }
  getUser(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}datos_usuario`, { headers });
  }
}
