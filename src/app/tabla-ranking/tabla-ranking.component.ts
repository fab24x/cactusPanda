import { Component, OnInit } from '@angular/core';
import { PrediJugador } from '../models/predi-jugador';
import { PrediJugadorService } from '../services/predi-jugador.service';

@Component({
  selector: 'app-tabla-ranking',
  templateUrl: './tabla-ranking.component.html',
  styleUrls: ['./tabla-ranking.component.scss']
})
export class TablaRankingComponent implements OnInit {

  players: PrediJugador[] = [];

  constructor(private prediJugadorService: PrediJugadorService) {}

  ngOnInit(): void {
    this.prediJugadorService.getTopPlayers().subscribe((data: PrediJugador[]) => {
      this.players = data;
      console.log('Players data:', this.players);
    });
  }

  parseNumber(value: string): number {
    return parseFloat(value.replace(/\./g, '').replace(' €', '').replace(',', '.'));
  }

  getComparisonClass(actual: string, predicted: string): string {
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

  getComparisonIcon(actual: string, predicted: string): string {
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
