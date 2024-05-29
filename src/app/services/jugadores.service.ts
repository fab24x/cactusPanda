import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { environment } from '../../environments/environment';
import { map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  private apiUrl = `${environment.rutaApi}jugadores`;

  constructor(private http: HttpClient) {}

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
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
    return this.http
      .get<any>(`${environment.rutaApi}equipos/${equipo_id}`)
      .pipe(map((equipo: any) => equipo.nombre));
  }
}
