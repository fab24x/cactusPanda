import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-mister',
  templateUrl: './login-mister.component.html',
  styleUrls: ['./login-mister.component.scss']
})
export class LoginMisterComponent implements OnInit {
  nombre = 'Mario';

  ngOnInit(): void {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    if (togglePassword && password) {
      togglePassword.addEventListener('click', () => {
        // Toggle the type attribute using getAttribute() method
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        // Toggle the eye and eye-slash icon
        const icon = togglePassword.querySelector('i');
        if (icon) {
          icon.classList.toggle('bi-eye');
          icon.classList.toggle('bi-eye-slash');
        }
      });
    }
  }
}
