import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/LoginResponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  angForm!: FormGroup;
  camposVacios: boolean = false;
  camposIncorrectos: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void { }

  createForm() {
    this.angForm = this.fb.group({
      nombre_de_usuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.angForm.invalid) {
      this.camposVacios = true;
      return;
    }

    const { nombre_de_usuario, correo, pass, fecha_nacimiento, nombre, apellido } = this.angForm.value;

    this.authService.register(nombre_de_usuario, correo, pass, fecha_nacimiento, nombre, apellido).subscribe(
      (response: LoginResponse) => {
        console.log('Register exitoso:', response);
        // Redirigir al usuario después de un inicio de sesión exitoso
        this.router.navigate(['/login-mister']);
      },
      error => {
        console.log('Error register:', error);
        this.camposIncorrectos = true;
      }
    );
  }
}
