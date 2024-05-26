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

}
