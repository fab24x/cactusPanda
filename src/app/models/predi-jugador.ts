export class PrediJugador {
  id_jugador: number;
  jornada: number;
  puntos_jornada: number;
  nombre_del_jugador: string;
  puntos_jornada_prediccion: number;
  precio_jugador: number;
  prediccion_precio_jugador: number;

  constructor(
      id_jugador: number,
      jornada: number,
      puntos_jornada: number,
      nombre_del_jugador: string,
      puntos_jornada_prediccion: number,
      precio_jugador: number,
      prediccion_precio_jugador: number
  ) {
      this.id_jugador = id_jugador;
      this.nombre_del_jugador = nombre_del_jugador;
      this.jornada = jornada;
      this.puntos_jornada = puntos_jornada;
      this.puntos_jornada_prediccion = puntos_jornada_prediccion;
      this.precio_jugador = precio_jugador;
      this.prediccion_precio_jugador = prediccion_precio_jugador;
  }
}