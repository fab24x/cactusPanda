import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl = `${environment.rutaApi}`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUsuarios(): Observable<Usuario[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(this.apiUrl+'usuarios', {headers}).pipe(
      map((response: any) => {
        const data = response.data;
        if (Array.isArray(data)) {
          return data.map(
            (item) =>
              new Usuario(
                item.id,
                item.username,
                item.email,
                item.name,
                item.surname,
                item.birthdate,
                item.creation_date
              )
          );
        } else {
          console.error('La respuesta del servidor no es un array:', response);
          return []; // Devuelve un array vacío si la respuesta no es un array
        }
      })
    );
  }

  getNombreEquipo(equipo_id: number): Observable<string> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http
      .get<any>(`${environment.rutaApi}equipos/${equipo_id}`, {headers})
      .pipe(map((equipo: any) => equipo.nombre));
  }

  updateSpecificValues(id: number, changes: any, accessToken: string): Observable<any> {
    const url = `${this.apiUrl}usuarios/update-values/${id}`;
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put(url, changes, { headers });
  }
}
