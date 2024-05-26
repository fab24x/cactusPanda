import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrediJugador } from '../models/predi-jugador';

@Injectable({
  providedIn: 'root'
})
export class PrediJugadorService {

  private apiUrl = `${environment.rutaApi}ranking-jugadores`;

  constructor(private http: HttpClient) {}

  getTopPlayers(): Observable<PrediJugador[]> {
    console.log(this.http.get<PrediJugador[]>(this.apiUrl));
    return this.http.get<PrediJugador[]>(this.apiUrl);
  }
  
}
