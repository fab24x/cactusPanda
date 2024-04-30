export class Jugador {
  id: number;
  id_web: number;
  nombre: string;
  equipo_id: number;
  posicion: string;
  nombreEquipo?: string; // Propiedad adicional

  constructor(
    id: number = 0,
    id_web: number = 0,
    nombre: string = '',
    equipo_id: number = 0,
    posicion: string = ''
  ) {
    this.id = id;
    this.id_web = id_web;
    this.nombre = nombre;
    this.equipo_id = equipo_id;
    this.posicion = posicion;
  }
}
