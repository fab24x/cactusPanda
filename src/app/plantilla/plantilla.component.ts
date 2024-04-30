import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../services/jugadores.service';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.scss',
})
export class PlantillaComponent implements OnInit {
  jugadores: Jugador[] = []; // Array de Jugadores
  jugadoresFiltrados: Jugador[] = [];
  idsWebAFiltrar: number[] = [
    12902, 56, 57, 6035, 476, 1713, 48935, 464, 29, 18109,
  ];

  constructor(private jugadoresService: JugadoresService) {} // Inyección del servicio

  ngOnInit() {
    this.loadJugadores();
  }

  loadJugadores() {
    this.jugadoresService.getJugadores().subscribe({
      next: (response: any) => {
        if (Array.isArray(response.data)) {
          this.jugadores = response.data;
          this.getJugadoresPorIdsWeb(this.idsWebAFiltrar); // Llamada al método de filtrado
        } else {
          console.error(
            'La respuesta del servicio no contiene un array de jugadores:',
            response
          );
        }
      },
      error: (error: any) => {
        console.error('Hubo un error al cargar los jugadores:', error);
      },
    });
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

  getJugadoresPorIdsWeb(idsWeb: number[]) {
    this.jugadoresFiltrados = this.jugadores.filter((jugador) =>
      idsWeb.includes(jugador.id_web)
    );
  }
}
