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
  private apiUrl = `${environment.rutaApi}jugadores`;

  constructor(private http: HttpClient) {}

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => {
        const data = response.data;
        if (Array.isArray(data)) {
          return data.map(
            (item) =>
              new Jugador(
                item.id,
                item.id_web,
                item.nombre,
                item.equipo_id,
                item.posicion
              )
          );
        } else {
          console.error('La respuesta del servidor no es un array:', response);
          return []; // Devuelve un array vacío si la respuesta no es un array
        }
      })
    );
  }
}
