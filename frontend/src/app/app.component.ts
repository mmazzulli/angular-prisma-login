import { Component, OnInit } from '@angular/core';
import { DbTestService } from './services/db-test.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ message }}</h1>
    <button (click)="testConnection()">Testar Conexão</button>
  `
})
export class AppComponent implements OnInit {
  message = '';

  constructor(private dbTestService: DbTestService) {}

  ngOnInit() {}

  testConnection() {
    this.dbTestService.getDbStatus().subscribe({
      next: (res) => this.message = res.message,
      error: (err) => this.message = 'Erro ao conectar ao backend'
    });
  }
}