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
      next: (response: Jugador[]) => {
        // Cambiar 'any' por 'Jugador[]' para un tipado más preciso
        this.jugadores = response; // Asignar directamente la respuesta a this.jugadores
        this.getJugadoresPorIdsWeb(this.idsWebAFiltrar); // Llamada al método de filtrado
        this.actualizarNombresEquipos();
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

  actualizarNombresEquipos() {
    this.jugadores.forEach((jugador) => {
      this.jugadoresService.getNombreEquipo(jugador.equipo_id).subscribe({
        next: (nombreEquipo: string) => {
          jugador.nombreEquipo = nombreEquipo; // Agregar el nombre del equipo al jugador
        },
        error: (error: any) => {
          console.error(
            `Hubo un error al obtener el nombre del equipo para el jugador ${jugador.id}:`,
            error
          );
        },
      });
    });
  }
}
