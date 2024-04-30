import { Component } from '@angular/core';
import { JugadoresService } from '../services/jugadores.service';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.scss',
})
export class PlantillaComponent {
  jugadores = [
    {
      id: 1,
      idJugador: 56,
      nombre: 'Claudio Bravo',
      posicion: 'PT',
      puntos: '28',
      equipo: 'Real Betis',
      precio: 907000,
    },
    {
      id: 2,
      idJugador: 57,
      nombre: 'Jesús Navas',
      posicion: 'DF',
      puntos: '32',
      equipo: 'Sevilla',
      precio: 1000000,
    },
    {
      id: 3,
      idJugador: 58,
      nombre: 'Sergio Ramos',
      posicion: 'DF',
      puntos: '42',
      equipo: 'Real Madrid',
      precio: 1500000,
    },
    {
      id: 4,
      idJugador: 59,
      nombre: 'Gerard Piqué',
      posicion: 'DF',
      puntos: '38',
      equipo: 'Barcelona',
      precio: 1200000,
    },
    {
      id: 5,
      idJugador: 60,
      nombre: 'Jordi Alba',
      posicion: 'DF',
      puntos: '40',
      equipo: 'Barcelona',
      precio: 1300000,
    },
    {
      id: 6,
      idJugador: 61,
      nombre: 'Sergio Busquets',
      posicion: 'MC',
      puntos: '35',
      equipo: 'Barcelona',
      precio: 1100000,
    },
    {
      id: 7,
      idJugador: 62,
      nombre: 'Sergio Canales',
      posicion: 'MC',
      puntos: '37',
      equipo: 'Real Betis',
      precio: 1150000,
    },
    {
      id: 8,
      idJugador: 63,
      nombre: 'Lionel Messi',
      posicion: 'DL',
      puntos: '50',
      equipo: 'Barcelona',
      precio: 2000000,
    },
    {
      id: 9,
      idJugador: 64,
      nombre: 'Karim Benzema',
      posicion: 'DL',
      puntos: '48',
      equipo: 'Real Madrid',
      precio: 1900000,
    },
    {
      id: 10,
      idJugador: 65,
      nombre: 'Luis Suárez',
      posicion: 'DL',
      puntos: '45',
      equipo: 'Atlético de Madrid',
      precio: 1800000,
    },
    {
      id: 11,
      idJugador: 66,
      nombre: 'Youssef En-Nesyri',
      posicion: 'DL',
      puntos: '43',
      equipo: 'Sevilla',
      precio: 1700000,
    },
  ];

  constructor(private jugadoresService: JugadoresService) {}

  ngOnInit(): void {
    this.cargarJugadores();
  }

  cargarJugadores(): void {
    this.jugadoresService.getJugadorWeb(56).subscribe((jugadoresApi) => {
      this.jugadores = jugadoresApi;
    });
  }
}
