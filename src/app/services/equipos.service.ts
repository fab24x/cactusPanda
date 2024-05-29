import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  private apiUrl = `${environment.rutaApi}equipos`;

  constructor(private http: HttpClient,  private authService: AuthService) {}

  getEquipos(): Observable<Equipo[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers}).pipe(
      map((response: any) => {
        const data = response.data;
        if (Array.isArray(data)) {
          return data.map((item) => new Equipo(item.id, item.nombre));
        } else {
          console.error('La respuesta del servidor no es un array:', response);
          return []; // Devuelve un array vacío si la respuesta no es un array
        }
      })
    );
  }
}
