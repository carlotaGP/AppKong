import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../shared/token/token.service';

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

  constructor(private router: Router, private authService: AuthService,  private tokenService: TokenService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.tokenService.saveToken(response.token);
        this.router.navigate(['/fichar-asistencia']); // Redirigir a la siguiente interfaz
      },
      error => {
        console.error('Error al iniciar sesión', error);
        alert('Error al iniciar sesión.')
      }
    );
  }
}
