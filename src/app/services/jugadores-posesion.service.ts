import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth-service.service';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresPosesionService {

  private apiUrl = `${environment.rutaApi}`;

  constructor(private http: HttpClient,  private authService: AuthService) {}

  actualizarJugadores(idUsuario: number, jugadores: number[]): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    });

    const body = {
        id_usuario: idUsuario,
        jugadores: jugadores
    };

    console.log('Payload:', body); // Log para verificar el payload

    return this.http.post<any>(`${this.apiUrl}actualizar-jugadores`, body, { headers });
  }



  getJugadoresPosesion(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(this.apiUrl+'jugadores-posesion', { headers });
  }

  private getToken(): string {
    const token = this.authService.getToken();
    return token || '';
  }
}
