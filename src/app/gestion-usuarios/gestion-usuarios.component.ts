import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Usuario {
  id: number;
  nombre_de_usuario: string;
  nombre_mister?: string;
  correo: string;
  pass: string;
  pass_mister?: string;
  nombre: string;
  apellido: string;
  fecha_nacimiento: string;
  fecha_creacion: string;
}

const USUARIOS: Usuario[] = [
  {
    id: 1,
    nombre_de_usuario: "maria.lopez",
    nombre_mister: "maria.lopez",
    correo: "maria.lopez@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "María",
    apellido: "López",
    fecha_nacimiento: "1980-01-01",
    fecha_creacion: "2023-10-26T10:15:00.000Z",
  },
  {
    id: 2,
    nombre_de_usuario: "david.rodriguez",
    nombre_mister: "david.rodriguez",
    correo: "david.rodriguez@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "David",
    apellido: "Rodriguez",
    fecha_nacimiento: "1985-02-12",
    fecha_creacion: "2023-09-12T17:30:00.000Z",
  },
  {
    id: 3,
    nombre_de_usuario: "isabel.fernandez",
    nombre_mister: "isabel.fernandez",
    correo: "isabel.fernandez@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "Isabel",
    apellido: "Fernandez",
    fecha_nacimiento: "1990-03-15",
    fecha_creacion: "2023-08-01T14:00:00.000Z",
  },
  {
    id: 4,
    nombre_de_usuario: "luis.sanchez",
    nombre_mister: "luis.sanchez",
    correo: "luis.sanchez@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "Luis",
    apellido: "Sanchez",
    fecha_nacimiento: "1978-04-20",
    fecha_creacion: "2023-07-15T09:45:00.000Z",
  },
  {
    id: 5,
    nombre_de_usuario: "sofia.martinez",
    nombre_mister: "sofia.martinez",
    correo: "sofia.martinez@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "Sofía",
    apellido: "Martinez",
    fecha_nacimiento: "1983-05-25",
    fecha_creacion: "2023-06-20T12:00:00.000Z",
  },
  {
    id: 6,
    nombre_de_usuario: "carlos.garcia",
    nombre_mister: "carlos.garcia",
    correo: "carlos.garcia@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "Carlos",
    apellido: "Garcia",
    fecha_nacimiento: "1988-06-30",
    fecha_creacion: "2023-05-18T08:30:00.000Z",
  },
  {
    id: 7,
    nombre_de_usuario: "laura.ramirez",
    nombre_mister: "laura.ramirez",
    correo: "laura.ramirez@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "Laura",
    apellido: "Ramirez",
    fecha_nacimiento: "1975-07-05",
    fecha_creacion: "2023-04-10T14:20:00.000Z",
  },
  {
    id: 8,
    nombre_de_usuario: "juan.perez",
    nombre_mister: "juan.perez",
    correo: "juan.perez@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "Juan",
    apellido: "Perez",
    fecha_nacimiento: "1992-08-15",
    fecha_creacion: "2023-03-05T09:45:00.000Z",
  },
  {
    id: 9,
    nombre_de_usuario: "ana.gonzalez",
    nombre_mister: "ana.gonzalez",
    correo: "ana.gonzalez@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "Ana",
    apellido: "Gonzalez",
    fecha_nacimiento: "1981-09-10",
    fecha_creacion: "2023-02-20T11:00:00.000Z",
  },
  {
    id: 10,
    nombre_de_usuario: "martin.ruiz",
    nombre_mister: "martin.ruiz",
    correo: "martin.ruiz@example.com",
    pass: "password123",
    pass_mister: "password123",
    nombre: "Martin",
    apellido: "Ruiz",
    fecha_nacimiento: "1989-10-05",
    fecha_creacion: "2023-01-15T13:35:00.000Z",
  },
];

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss'],
  standalone: true,
  imports: [FormsModule, NgbPaginationModule, RouterModule, CommonModule]
})
export class GestionUsuariosComponent {
  nombre = 'Mario';

  page = 1;
  pageSize = 5;
  collectionSize = USUARIOS.length;
  usuarios!: Usuario[];
  selectedUsuario!: Usuario;
  originalUsuario!: Usuario;
  showPass: boolean = false;
  showPassMister: boolean = false;

  constructor(private modalService: BsModalService) {
    this.refreshUsuarios();
  }

  refreshUsuarios() {
    this.usuarios = USUARIOS.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }

  trackByNombreDeUsuario(index: number, usuario: Usuario): string {
    return usuario.nombre_de_usuario;
  }

  confirmarActualizacion() {
    if (window.confirm("¿Estás seguro de que quieres realizar los cambios? Esta acción no se puede deshacer.")) {
      this.actualizarUsuario();
    }
  }

  actualizarUsuario() {
    const index = USUARIOS.findIndex(usuario => usuario.id === this.originalUsuario.id);
    if (index !== -1) {
      USUARIOS[index] = { ...this.selectedUsuario };
    }
    this.modalRef.hide();
    this.refreshUsuarios(); // Actualizar la lista de usuarios para reflejar los cambios
  }

  modalRef!: BsModalRef;

  openModal(template: TemplateRef<any>, usuario: Usuario) {
    this.originalUsuario = { ...usuario }; // Guardar una copia del usuario original
    this.selectedUsuario = { ...usuario }; // Crear una copia para editar
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.showPass = false;
    this.showPassMister = false;
  }

  toggleShowPass() {
    this.showPass = !this.showPass;
  }

  toggleShowPassMister() {
    this.showPassMister = !this.showPassMister;
  }
}