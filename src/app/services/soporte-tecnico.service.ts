import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SoporteTecnico } from '../models/soporte-tecnico';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SoporteTecnicoPost } from '../models/soporte-tecnico-post';

@Injectable({
  providedIn: 'root'
})
export class SoporteTecnicoService {

  private apiUrl = `${environment.rutaApi}soporte_tecnico`;

  constructor(private http: HttpClient) {}

  getJugadores(): Observable<SoporteTecnico[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        if (response && response.length > 0) {
          return response.map(
            (item) =>
              new SoporteTecnico(
                item.id,
                item.problema,
                item.descripcion,
                item.fecha_mensaje,
                item.correo,
                item.nombre_de_usuario,
                item.nombre,
                item.apellido
              )
          );
        } else {
          console.error('La respuesta del servidor está vacía o no es válida:', response);
          return []; // Devuelve un array vacío si la respuesta está vacía o no es válida
        }
      })
    );
  }

  crearSolicitud(correo: string, problema: string, descripcion: string): Observable<any> {
    const soporte: SoporteTecnico = new SoporteTecnico(correo, problema, descripcion);
    return this.http.post<any>(this.apiUrl, soporte);
  }
  
}
