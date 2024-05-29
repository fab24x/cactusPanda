import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GestionUsuarioService } from '../services/gestion-usuario.service';
import { GestionUsuario } from '../models/gestion-usuario';

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
  collectionSize = 0;
  usuarios!: GestionUsuario[];
  selectedUsuario!: GestionUsuario;
  originalUsuario!: GestionUsuario;
  showPass: boolean = false;
  showPassMister: boolean = false;
  modalRef!: BsModalRef;
  errorMessage: string = '';

  constructor(private modalService: BsModalService, private gestionUsuario: GestionUsuarioService) {
    this.refreshUsuarios();
  }

  refreshUsuarios() {
    this.gestionUsuario.getUsuarios().subscribe(data => {
      this.usuarios = data;
      this.collectionSize = data.length;
      this.paginate();
    });
  }

  paginate() {
    this.usuarios = this.usuarios.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }

  trackByNombreDeUsuario(index: number, usuario: GestionUsuario): string {
    return usuario.nombre_de_usuario;
  }

  confirmarActualizacion() {
    if (!this.validatePassword(this.selectedUsuario.pass)) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres.';
      return;
    }

    if (window.confirm("¿Estás seguro de que quieres realizar los cambios? Esta acción no se puede deshacer.")) {
      this.actualizarUsuario();
    }
  }

  actualizarUsuario() {
    this.gestionUsuario.updateUsuario(this.selectedUsuario).subscribe(() => {
      this.modalRef.hide();
      this.refreshUsuarios();
    });
  }

  openModal(template: TemplateRef<any>, usuario: GestionUsuario) {
    this.originalUsuario = { ...usuario };
    this.selectedUsuario = { ...usuario };
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.showPass = false;
    this.showPassMister = false;
    this.errorMessage = '';
  }

  toggleShowPass() {
    this.showPass = !this.showPass;
  }

  toggleShowPassMister() {
    this.showPassMister = !this.showPassMister;
  }

  validatePassword(password: string | undefined): boolean {
    return typeof password === 'string' && password.length >= 8;
  }
}
