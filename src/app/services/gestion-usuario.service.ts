import { Injectable } from '@angular/core';
import { GestionUsuario } from '../models/gestion-usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestionUsuarioService {

  private apiUrl = `${environment.rutaApi}GestionaUsuario`;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<GestionUsuario[]> {
    return this.http.get<GestionUsuario[]>(this.apiUrl);
  }

  updateUsuario(usuario: GestionUsuario): Observable<GestionUsuario> {
    return this.http.put<GestionUsuario>(`${this.apiUrl}/${usuario.id}`, usuario);
  }
}
