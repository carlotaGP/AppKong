import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/fichar-asistencia']); // Redirigir a la siguiente interfaz
      },
      error => {
        console.error('Error al iniciar sesión', error);
        // Aquí podrías mostrar un mensaje de error al usuario si deseas
      }
    );
  }
}
