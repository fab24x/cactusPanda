import { Component, OnInit } from '@angular/core';
import { PrediJugador } from '../models/predi-jugador';
import { PrediJugadorService } from '../services/predi-jugador.service';

@Component({
  selector: 'app-mercado-jugador',
  templateUrl: './mercado-jugador.component.html',
  styleUrls: ['./mercado-jugador.component.scss']
})
export class MercadoJugadorComponent implements OnInit {

  players: PrediJugador[] = [];

  constructor(private prediJugadorService: PrediJugadorService) {}

  ngOnInit(): void {
    this.prediJugadorService.getRandomPlayers(22).subscribe((data: PrediJugador[]) => {
      this.players = data;
      console.log('Players data:', this.players);
    });
  }

  parseNumber(value: string): number {
    return parseFloat(value.replace(/\./g, '').replace(' €', '').replace(',', '.'));
  }

  getComparisonClass(actual: string | null, predicted: string | null): string {
    if (actual === null || predicted === null) {
      return '';
    }

    const actualNumber = this.parseNumber(actual);
    const predictedNumber = this.parseNumber(predicted);

    if (actualNumber > predictedNumber) {
      return 'text-danger';
    } else if (actualNumber < predictedNumber) {
      return 'text-success';
    } else {
      return '';
    }
  }

  getComparisonIcon(actual: string | null, predicted: string | null): string {
    if (actual === null || predicted === null) {
      return 'bi-dash';
    }

    const actualNumber = this.parseNumber(actual);
    const predictedNumber = this.parseNumber(predicted);

    if (actualNumber > predictedNumber) {
      return 'bi-arrow-down';
    } else if (actualNumber < predictedNumber) {
      return 'bi-arrow-up';
    } else {
      return 'bi-dash';
    }
  }
} 
