import { Component } from '@angular/core';
import { Saludador } from './saludador/saludador';

@Component({
  selector: 'app-root',
  imports: [Saludador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
