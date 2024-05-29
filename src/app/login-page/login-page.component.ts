import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService } from '../services/auth-service.service';
import { LoginResponse } from '../models/LoginResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  angForm!: FormGroup;
  camposVacios: boolean = false;
  camposIncorrectos: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void { }

  createForm() {
    this.angForm = this.fb.group({
      correo: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.angForm.invalid) {
      this.camposVacios = true;
      return;
    }

    const { correo, pass } = this.angForm.value;

    this.authService.login(correo, pass).subscribe(
      (response: LoginResponse) => {
        console.log('Login exitoso:', response);
        // Redirigir al usuario después de un inicio de sesión exitoso
        this.router.navigate(['/plantilla']);
      },
      error => {
        console.log('Error en el login:', error);
        this.camposIncorrectos = true;
        console.log(correo + pass)
      }
    );
  }
}
