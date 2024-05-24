import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SoporteTecnicoService } from '../services/soporte-tecnico.service'; // Conexión con la API
import { RouterModule } from '@angular/router';
import { Usuario } from '../models/usuario';
import { SoporteTecnico } from '../models/soporte-tecnico';

@Component({
  selector: 'app-soporte-tecnico',
  templateUrl: './soporte-tecnico.component.html',
  styleUrls: ['./soporte-tecnico.component.scss'],
  imports: [DecimalPipe, FormsModule, NgbTypeaheadModule, NgbPaginationModule, RouterModule],
  standalone: true,
})

export class SoporteTecnicoComponent implements OnInit {
  nombre = 'Mario'
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  soporteTecnico: SoporteTecnico[] = [];
  paginatedSoporteTecnico: SoporteTecnico[] = [];
  selectedUsuario!: SoporteTecnico; // Variable para mantener el estado del usuario seleccionado

  constructor(private soporteTecnicoService: SoporteTecnicoService, private modalService: BsModalService) {}

  ngOnInit() {
    this.loadSoporteTecnico();
    console.log(this.soporteTecnico);
  }

  loadSoporteTecnico() {
    this.soporteTecnicoService.getJugadores().subscribe((data: SoporteTecnico[]) => {
      this.soporteTecnico = data;
      this.collectionSize = this.soporteTecnico.length;
      this.refreshSoporteTecnico();
    });
  }

  refreshSoporteTecnico() {
    this.paginatedSoporteTecnico = this.soporteTecnico
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }


  modalRef!: BsModalRef;

  openModal(template: TemplateRef<any>, soporteTecnico: SoporteTecnico) {
    this.selectedUsuario = soporteTecnico; // Actualiza el usuario seleccionado
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
}
