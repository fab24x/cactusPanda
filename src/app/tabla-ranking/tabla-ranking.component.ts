import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-ranking',
  templateUrl: './tabla-ranking.component.html',
  styleUrl: './tabla-ranking.component.scss'
})
export class TablaRankingComponent {
  rankings = [
    { position: 1, teamName: 'FC Barcelona', points: 88 },
    { position: 2, teamName: 'Real Madrid', points: 86 },
    { position: 3, teamName: 'Atletico Madrid', points: 78 },
    // Agrega más equipos según sea necesario
  ];
}

