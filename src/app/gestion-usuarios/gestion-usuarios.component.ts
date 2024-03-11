import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.scss',
})


export class GestionUsuariosComponent {
  nombre = 'Mario'


  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    const config: ModalOptions = { class: 'modal-sm' };
    this.modalRef = this.modalService.show(template, config);
  }
}