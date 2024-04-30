import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions} from 'ngx-bootstrap/modal';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


export interface Usuario {
  nombre_de_usuario: string;
  nombre: string;
  apellido: string;
  fecha_creacion: string;
}

const USUARIOS: Usuario[] = [
  {
    nombre_de_usuario: "maria.lopez",
    nombre: "María",
    apellido: "López",
    fecha_creacion: "2023-10-26T10:15:00.000Z",
  },
  {
    nombre_de_usuario: "david.rodriguez",
    nombre: "David",
    apellido: "Rodriguez",
    fecha_creacion: "2023-09-12T17:30:00.000Z",
  },
  {
    nombre_de_usuario: "isabel.fernandez",
    nombre: "Isabel",
    apellido: "Fernandez",
    fecha_creacion: "2023-08-01T14:00:00.000Z",
  },
  {
    nombre_de_usuario: "luis.sanchez",
    nombre: "Luis",
    apellido: "Sanchez",
    fecha_creacion: "2023-07-15T09:45:00.000Z",
  },
  {
    nombre_de_usuario: "sofia.martinez",
    nombre: "Sofía",
    apellido: "Martinez",
    fecha_creacion: "2023-06-20T12:00:00.000Z",
  },
  {
    nombre_de_usuario: "maria.lopez1",
    nombre: "María",
    apellido: "López",
    fecha_creacion: "2023-10-26T10:15:00.000Z",
  },
  {
    nombre_de_usuario: "david.rodriguez1",
    nombre: "David",
    apellido: "Rodriguez",
    fecha_creacion: "2023-09-12T17:30:00.000Z",
  },
  {
    nombre_de_usuario: "maria.lopez2",
    nombre: "María",
    apellido: "López",
    fecha_creacion: "2023-10-26T10:15:00.000Z",
  },
  {
    nombre_de_usuario: "david.rodriguez2",
    nombre: "David",
    apellido: "Rodriguez",
    fecha_creacion: "2023-09-12T17:30:00.000Z",
  },
];

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.scss',
  standalone: true,
  imports: [FormsModule, NgbPaginationModule, RouterModule]
})


export class GestionUsuariosComponent {
  nombre = 'Mario'

  page = 1;
	pageSize = 5;
	collectionSize = USUARIOS.length;
	usuarios!: Usuario[];
  selectedUsuario!: Usuario; // Variable para mantener el estado del usuario seleccionado
  

	refreshUsuarios() {
		this.usuarios = USUARIOS.map((usuario, i) => ({ id: i + 1, ...usuario })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

  actualizarUsuario() {
    const index = USUARIOS.findIndex(usuario => usuario.nombre_de_usuario === this.selectedUsuario.nombre_de_usuario);
    if (index !== -1) {
        USUARIOS[index] = this.selectedUsuario;
    }
    this.modalRef.hide();
  }

  constructor(private modalService: BsModalService) {
    this.refreshUsuarios();
  }

  modalRef!: BsModalRef;

  openModal(template: TemplateRef<any>, usuario: Usuario) {
    this.selectedUsuario = usuario; // Actualiza el usuario seleccionado
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
}