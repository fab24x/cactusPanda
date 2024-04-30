import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  camposVacios = false;
  camposIncorrectos = false;
  title = 'Angular Form Validation Tutorial';
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializar angForm en el constructor
    this.angForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Verificar si el formulario es válido
    if (this.angForm.valid) {
      // Aquí puedes agregar la lógica para enviar los datos del formulario
      console.log('Formulario válido');
      console.log('Datos del formulario:', this.angForm.value);
    } else {
      // Si el formulario no es válido, ver si los campos están vacíos
      const emailControl = this.angForm.get('email');
      const passwordControl = this.angForm.get('password');
  
      if (!emailControl || !passwordControl || !emailControl.value || !passwordControl.value) {
        this.camposVacios = true;
        this.camposIncorrectos = false;
        return;
      }
  
      // Si los campos no están vacíos, establecer camposIncorrectos en true
      this.camposVacios = false;
      this.camposIncorrectos = true;
      // También puedes marcar los campos como tocados para mostrar mensajes de error en la plantilla HTML
      this.markFormGroupTouched(this.angForm);
    }
  }
  
  
  

  // Método para marcar todos los campos como tocados
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
