import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onSubmit()">
      <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required />
      <input type="password" [(ngModel)]="password" name="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>

    <p>
      Não tem conta?
      <a routerLink="/register">Cadastre-se aqui</a>
    </p>
  `
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        this.authService.saveToken(res.token);
        this.router.navigate(['/welcome']); // redireciona para página de boas-vindas
      },
      error: err => alert(err.error.error || 'Erro no login')
    });
  }
}