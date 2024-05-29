import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { environment } from '../../environments/environment';
import { map, tap} from 'rxjs/operators';
import { AuthService } from './auth-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  private apiUrl = `${environment.rutaApi}jugadores`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getJugadores(): Observable<Jugador[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map(response => {
        console.log('API response:', response); // Para depuración
        const data = response.data;
        return data.map((item: any) => this.mapToJugador(item));
      })
    );
  }

  private mapToJugador(data: any): Jugador {
    return new Jugador(
      data.id,
      data.id_web,
      data.nombre_del_jugador,
      data.id_equipo,
      data.posicion,
      data.equipo_id_web,
      data.nombreEquipo
    );
  }

  getNombreEquipo(equipo_id: number): Observable<string> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http
      .get<any>(`${environment.rutaApi}equipos/${equipo_id}`, { headers })
      .pipe(map((equipo: any) => equipo.nombre));
  }
}
