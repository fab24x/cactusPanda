import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class JugadoresPosesionService {

  private apiUrl = `${environment.rutaApi}actualizar-jugadores`;

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

    return this.http.post<any>(this.apiUrl, body, { headers });
  }

  private getToken(): string {
    const token = this.authService.getToken();
    return token || '';
  }
}
