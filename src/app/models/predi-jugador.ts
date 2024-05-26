export class PrediJugador {
    id_jugador: number;
    jornada: number;
    puntos_jornada: number;
    nombre_del_jugador: string;


  constructor(
    id_jugador: number,
    jornada: number,
    puntos_jornada: number,
    nombre_del_jugador: string,
  ) {
    this.id_jugador = id_jugador;
    this.nombre_del_jugador = nombre_del_jugador;
    this.jornada = jornada;
    this.puntos_jornada = puntos_jornada;
  }
}
