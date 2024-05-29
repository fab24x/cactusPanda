import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { JugadoresService } from '../services/jugadores.service';
import { Jugador } from '../models/jugador';
import { JugadoresPosesionService } from '../services/jugadores-posesion.service';

@Component({
  selector: 'app-editar-plantilla',
  templateUrl: './editar-plantilla.component.html',
  styleUrls: ['./editar-plantilla.component.scss']
})
export class EditarPlantillaComponent implements OnInit {
  searchText: string = '';
  players: Jugador[] = [];
  user: any;
  selectedPlayers: { [key: number]: boolean } = {};
  currentPage: number = 1;
  itemsPerPage: number = 10;
  maxSelectedPlayers: number = 11;
  maxGoalkeepers: number = 1;
  maxDefenders: number = 4;
  maxMidfielders: number = 4;
  maxForwards: number = 4;
  playersActuales: any;

  constructor(
    private jugadoresService: JugadoresService,
    private authService: AuthService,
    private jugadoresPosesionService: JugadoresPosesionService
  ) {}

  ngOnInit(): void {
    this.loadPlayers();
    this.loadUser();
    this.loadApiPlayers();
  }

  loadApiPlayers(): void {
    this.jugadoresPosesionService.getJugadoresPosesion().subscribe(
      (data: Jugador[]) => {
        this.playersActuales = data;
        this.initializeSelectedPlayers();
      },
      (error) => {
        console.error('Error al cargar jugadores:', error);
      }
    );
  }

  loadPlayers(): void {
    this.jugadoresService.getJugadores().subscribe(
      (data: Jugador[]) => {
        this.players = data;
        this.initializeSelectedPlayers();
      },
      (error) => {
        console.error('Error al cargar jugadores:', error);
      }
    );
  }

  loadUser(): void {
    this.authService.getUser().subscribe(
      (data: any) => {
        this.user = data;
      },
      (error) => {
        console.error('Error al cargar usuario:', error);
      }
    );
  }

  initializeSelectedPlayers(): void {
    this.players.forEach(player => {
      this.selectedPlayers[player.id] = false;
    });

    if (this.playersActuales) {
      this.playersActuales.forEach((player: Jugador) => {
        this.selectedPlayers[player.id] = true;
      });
    }
  }

  get filteredFutbolistas() {
    const filtered = this.players.filter(f => f.nombre.toLowerCase().includes(this.searchText.toLowerCase()));
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  get selectedFutbolistas() {
    const selected = this.players.filter(f => this.selectedPlayers[f.id]);
    return selected.sort((a, b) => this.getPositionOrder(a.posicion) - this.getPositionOrder(b.posicion));
  }

  getPositionOrder(posicion: string): number {
    switch (posicion) {
      case 'PT':
        return 1;
      case 'DF':
        return 2;
      case 'MC':
        return 3;
      case 'DL':
        return 4;
      default:
        return 5;
    }
  }

  toggleSeleccionado(futbolista: Jugador) {
    if (this.selectedPlayers[futbolista.id]) {
      this.selectedPlayers[futbolista.id] = false;
    } else {
      const selectedCount = this.getSelectedCount();
      const selectedGoalkeepers = this.getSelectedGoalkeepers();
      const selectedDefenders = this.getSelectedDefenders();
      const selectedMidfielders = this.getSelectedMidfielders();
      const selectedForwards = this.getSelectedForwards();

      if (selectedCount < this.maxSelectedPlayers) {
        if (futbolista.posicion === 'PT' && selectedGoalkeepers < this.maxGoalkeepers) {
          this.selectedPlayers[futbolista.id] = true;
        } else if (futbolista.posicion === 'DF' && selectedDefenders < this.maxDefenders) {
          this.selectedPlayers[futbolista.id] = true;
        } else if (futbolista.posicion === 'MC' && selectedMidfielders < this.maxMidfielders) {
          this.selectedPlayers[futbolista.id] = true;
        } else if (futbolista.posicion === 'DL' && selectedForwards < this.maxForwards) {
          this.selectedPlayers[futbolista.id] = true;
        }
      }
    }
  }

  getSelectedCount(): number {
    return Object.values(this.selectedPlayers).filter(selected => selected).length;
  }

  getSelectedGoalkeepers(): number {
    return this.players.filter(player => this.selectedPlayers[player.id] && player.posicion === 'PT').length;
  }

  getSelectedDefenders(): number {
    return this.players.filter(player => this.selectedPlayers[player.id] && player.posicion === 'DF').length;
  }

  getSelectedMidfielders(): number {
    return this.players.filter(player => this.selectedPlayers[player.id] && player.posicion === 'MC').length;
  }

  getSelectedForwards(): number {
    return this.players.filter(player => this.selectedPlayers[player.id] && player.posicion === 'DL').length;
  }

  isDisabled(futbolista: Jugador): boolean {
    const selectedCount = this.getSelectedCount();
    const selectedGoalkeepers = this.getSelectedGoalkeepers();
    const selectedDefenders = this.getSelectedDefenders();
    const selectedMidfielders = this.getSelectedMidfielders();
    const selectedForwards = this.getSelectedForwards();

    if (selectedCount >= this.maxSelectedPlayers && !this.selectedPlayers[futbolista.id]) {
      return true;
    }

    switch (futbolista.posicion) {
      case 'PT':
        return selectedGoalkeepers >= this.maxGoalkeepers && !this.selectedPlayers[futbolista.id];
      case 'DF':
        return selectedDefenders >= this.maxDefenders && !this.selectedPlayers[futbolista.id];
      case 'MC':
        return selectedMidfielders >= this.maxMidfielders && !this.selectedPlayers[futbolista.id];
      case 'DL':
        return selectedForwards >= this.maxForwards && !this.selectedPlayers[futbolista.id];
      default:
        return false;
    }
  }

  removeSeleccionado(futbolista: Jugador) {
    this.selectedPlayers[futbolista.id] = false;
  }

  guardarCambios() {
    const selectedIds = this.players.filter(player => this.selectedPlayers[player.id]).map(player => player.id);
    console.log('Selected player IDs:', selectedIds);
    console.log('User ID:', this.user.user_id);

    const selectedGoalkeepers = this.getSelectedGoalkeepers();

    if (this.user && selectedIds.length === this.maxSelectedPlayers && selectedGoalkeepers === this.maxGoalkeepers) {
      this.jugadoresPosesionService.actualizarJugadores(this.user.user_id, selectedIds).subscribe(
        response => {
          console.log('Jugadores actualizados correctamente:', response);
          alert('Jugadores actualizados correctamente');
        },
        error => {
          console.error('Error al actualizar jugadores:', error);
          alert('Error al actualizar jugadores');
        }
      );
    } else {
      alert('Debes seleccionar 11 jugadores incluyendo 1 portero');
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.players.length) {
      this.currentPage++;
    }
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
}
