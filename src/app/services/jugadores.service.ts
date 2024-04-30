import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  constructor(private http: HttpClient) {}

  getJugador(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(environment.rutaApi + 'jugadores/' + id);
  }

  getJugadorWeb(id_web: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${environment.rutaApi}jugadores/${id_web}`);
  }
}
