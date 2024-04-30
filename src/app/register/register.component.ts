import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  model: NgbDateStruct = { year: 2000, month: 1, day: 1 };; // Modelo para la fecha de nacimiento
  camposVacios = false;
  menorEdad = false;
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializar angForm en el constructor
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Verificar si el formulario es válido
    if (this.angForm.valid) {
      // Convertir la fecha de nacimiento seleccionada a un objeto de tipo Date
      const fechaNacimiento = new Date(this.model.year, this.model.month - 1, this.model.day);
      
      // Obtener la fecha actual
      const fechaActual = new Date();
      
      // Calcular la edad restando el año de nacimiento del año actual
      const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
      
      // Verificar si la edad es menor de 18
      if (edad < 18) {
        this.menorEdad = true;
      } else {
        this.menorEdad = false;
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        console.log('Formulario válido');
        console.log('Datos del formulario:', this.angForm.value);
      }
    } else {
      // Verificar si los campos están vacíos
      const usernameControl = this.angForm.get('username');
      const emailControl = this.angForm.get('email');
      const passwordControl = this.angForm.get('password');

      if (!usernameControl || !emailControl || !passwordControl ||
          !usernameControl.value || !emailControl.value || !passwordControl.value) {
        this.camposVacios = true;
        this.menorEdad = false;
        return;
      }
    }
  }
}
