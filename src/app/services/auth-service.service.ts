import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../models/LoginResponse';
import { Router } from '@angular/router';


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

  getUser(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}datos_usuario`, { headers });
  }
}
