import { Injectable } from '@angular/core';
import { GestionUsuario } from '../models/gestion-usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class GestionUsuarioService {

  private apiUrl = `${environment.rutaApi}GestionaUsuario`;

  constructor(private http: HttpClient,  private authService: AuthService) {}

  getUsuarios(): Observable<GestionUsuario[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<GestionUsuario[]>(this.apiUrl, { headers });
  }

  updateUsuario(usuario: GestionUsuario): Observable<GestionUsuario> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<GestionUsuario>(`${this.apiUrl}/${usuario.id}`, usuario, { headers });
  }
}
