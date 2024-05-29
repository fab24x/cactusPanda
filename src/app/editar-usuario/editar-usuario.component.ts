import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  angForm!: FormGroup;
  camposVacios: boolean = true;
  user: any;
  isDisabled: boolean = true; // Variable para controlar el estado de desactivación

  constructor(private fb: FormBuilder, private authService: AuthService, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.createForm();
    this.authService.getUser().subscribe(
      data => {
        this.user = data;
        console.log('Usuario obtenido:', this.user);
        this.populateForm();
      },
      error => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }

  createForm() {
    this.angForm = this.fb.group({
      nombre_de_usuario: [{ value: '', disabled: this.isDisabled }, Validators.required],
      correo: [{ value: '', disabled: this.isDisabled }, [Validators.required, Validators.email]],
      current_pass: ['', Validators.required],
      new_pass: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
    });
  }

  populateForm() {
    if (this.user) {
      this.angForm.patchValue({
        nombre_de_usuario: this.user.user.nombre_de_usuario,
        correo: this.user.user.correo,
        current_pass: '',
        new_pass: '',
        nombre: this.user.user.nombre,
        apellido: this.user.user.apellido,
        fecha_nacimiento: this.user.user.fecha_nacimiento,
      });
    }
  }

  onSubmit() {

    // Obtener el token de acceso desde localStorage
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      console.error('Error: No se encontró el token de acceso.');
      return;
    }

    // Preparar los cambios que deseas enviar
    const changes = {
      nombre_de_usuario: this.angForm.value.nombre_de_usuario,
      correo: this.angForm.value.correo,
      nombre: this.angForm.value.nombre,
      current_pass: this.angForm.value.current_pass,
      new_pass: this.angForm.value.new_pass,
      apellido: this.angForm.value.apellido,
      fecha_nacimiento: this.angForm.value.fecha_nacimiento,
    };
    console.log('Cambios:', changes);

    // Llamar al servicio para actualizar los datos del usuario
    this.usuariosService.updateSpecificValues(this.user.user.id, changes, accessToken)
      .subscribe(response => {
        console.log('Usuario actualizado:', response);
        alert('Usuario actualizado correctamente.');
      }, error => {
        console.error('Error al actualizar el usuario:', error);
        if (error.status === 400) {
          alert('Error: Contraseña incorrecta.');
        } else {
          alert('Error al actualizar el usuario.');
        }
      });
      // Procesar los datos del formulario
    console.log('Formulario enviado:', this.angForm.value);
  }
}
