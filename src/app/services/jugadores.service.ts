import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  private apiUrl = `${environment.rutaApi}/jugadores`;

  constructor(private http: HttpClient) {}

  getJugadores(): Observable<Jugador[]> {
    return this.http
      .get<Jugador[]>(this.apiUrl)
      .pipe(
        map((data: any[]) =>
          data.map(
            (item) =>
              new Jugador(
                item.id,
                item.id_web,
                item.nombre,
                item.equipo_id,
                item.posicion
              )
          )
        )
      );
  }
}
