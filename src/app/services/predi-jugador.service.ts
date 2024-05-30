import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrediJugador } from '../models/predi-jugador';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PrediJugadorService {

  private apiUrl = `${environment.rutaApi}ranking-jugadores`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getTopPlayers(): Observable<PrediJugador[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<PrediJugador[]>(this.apiUrl, { headers });
  }

  getRandomPlayers(count: number): Observable<PrediJugador[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${environment.rutaApi}jugadores-aleatorios/${count}`;
    return this.http.get<PrediJugador[]>(url, { headers });
  }
}