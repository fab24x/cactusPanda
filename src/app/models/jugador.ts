export class Jugador {
  constructor(
    public id: number = 0,
    public id_web: number = 0,
    public nombre_del_jugador: string = '',
    public id_equipo: number = 0,
    public posicion: string = '',
    public equipo_id_web: number = 0,
    public nombreEquipo?: string,
  ) {}
}
