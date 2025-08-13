import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Cadastro</h2>
    <form (ngSubmit)="onSubmit()">
      <input type="text" [(ngModel)]="name" name="name" placeholder="Nome" required />
      <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required />
      <input type="password" [(ngModel)]="password" name="password" placeholder="Senha" required />
      <button type="submit">Cadastrar</button>
    </form>
  `
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe({
      next: () => alert('Cadastro realizado!'),
      error: err => alert(err.error.error || 'Erro no cadastro')
    });
  }
}