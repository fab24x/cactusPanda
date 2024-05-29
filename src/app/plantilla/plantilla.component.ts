import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../services/jugadores.service';
import { Jugador } from '../models/jugador';
import { JugadoresPosesionService } from '../services/jugadores-posesion.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.scss',
})
export class PlantillaComponent implements OnInit {
  jugadores: any;

  constructor(private jugadoresPosesionService: JugadoresPosesionService) {}

  ngOnInit() {
    this.loadJugadores();
  }

  loadJugadores() {
    this.jugadoresPosesionService.getJugadoresPosesion().subscribe({
      next: (response: Jugador[]) => {
        this.jugadores = this.ordenarJugadores(response);
        console.log(this.jugadores);
      },
      error: (error: any) => {
        console.error('Hubo un error al cargar los jugadores:', error);
      },
    });
  }

  ordenarJugadores(jugadores: Jugador[]): Jugador[] {
    const orden: { [key in 'PT' | 'DF' | 'MC' | 'DL']: number } = { 'PT': 1, 'DF': 2, 'MC': 3, 'DL': 4 };
    return jugadores.sort((a, b) => orden[a.posicion as keyof typeof orden] - orden[b.posicion as keyof typeof orden]);
  }

  getPosicionClass(posicion: string): string {
    switch (posicion) {
      case 'PT':
        return 'pt-background';
      case 'DF':
        return 'df-background';
      case 'MC':
        return 'mc-background';
      case 'DL':
        return 'dl-background';
      default:
        return '';
    }
  }

  getPrecioClass(prediPrecio: number, ultimoPrediPrecio: number): string {
    if (prediPrecio > ultimoPrediPrecio) {
      return 'text-success bi bi-arrow-up';
    } else if (prediPrecio < ultimoPrediPrecio) {
      return 'text-danger bi bi-arrow-down';
    } else {
      return 'text-dark';
    }
  }

  getPuntuacionClass(prediPuntuacion: number, puntosJornada: number): string {
    if (prediPuntuacion > puntosJornada) {
      return 'text-success bi bi-arrow-up';
    } else if (prediPuntuacion < puntosJornada) {
      return 'text-danger bi bi-arrow-down';
    } else {
      return 'text-dark';
    }
  }
}
