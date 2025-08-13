import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Bem-vindo(a)!</h2>
    <p>Você fez login com sucesso.</p>
  `
})
export class WelcomeComponent {}
