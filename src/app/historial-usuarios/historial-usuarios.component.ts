import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-historial-usuarios',
  templateUrl: './historial-usuarios.component.html',
  styleUrl: './historial-usuarios.component.scss',
})
export class HistorialUsuariosComponent implements OnInit {
  nombre = localStorage.getItem('nombre');
  usuarios: Usuario[] = [];
  usuariosFiltrados: Usuario[] = [];
  page = 1;
  pageSize = 5;
  collectionSize = 0;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.usuariosService.getUsuarios().subscribe({
      next: (response: Usuario[]) => {
        this.usuarios = response;
      },
      error: (error: any) => {
        console.error('Hubo un error al cargar los jugadores:', error);
      },
    });
  }

  refreshUsuarios() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.collectionSize);
    this.usuariosFiltrados = this.usuarios.slice(startIndex, endIndex);
  }
}
