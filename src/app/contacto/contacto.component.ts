import { Component, ViewChild } from '@angular/core';
import { SoporteTecnicoService } from '../services/soporte-tecnico.service';
import { SoporteTecnico } from '../models/soporte-tecnico';
import { SoporteTecnicoPost } from '../models/soporte-tecnico-post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  @ViewChild('soporteForm') soporteForm!: NgForm; // Obtén una referencia al formulario

  // soporte: SoporteTecnicoPost = new SoporteTecnicoPost(' ', ' ', ' '); // Inicializa el modelo de soporte técnico
  mensaje: string = '';
  error: string = '';

  soporte = {
    correo: '',
    problema: '',
    descripcion: ''
  };

  constructor(private soporteService: SoporteTecnicoService) {}


  submitForm(){
    this.soporteService.crearSolicitud(this.soporteForm.value.correo, this.soporteForm.value.problema, this.soporteForm.value.descripcion)
      .subscribe(
        (response) => {
          this.mensaje = response.message; // Mensaje de éxito de la API
          alert(this.mensaje); // Muestra un mensaje de éxito
          this.error = ''; // Borra cualquier mensaje de error anterior
          this.soporteForm.reset(); // Limpia el formulario
        },
        (error) => {
          if (error.status === 404) {
            this.error = 'Tu correo no está registrado en CactusPanda. Registralo e inténtalo de nuevo'; // Mensaje de error específico para 404
            alert(this.error); // Muestra el error en la consola
          } else {
            this.error = 'Error en la solicitud: ' + error.message; // Otros errores
            alert(this.error); // Muestra el error en la consola
          }
          this.mensaje = ''; // Borra cualquier mensaje de éxito anterior
        }
      );
  }
  
}
