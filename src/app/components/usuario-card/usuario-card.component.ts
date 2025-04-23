import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [CommonModule, RouterModule], // Necesario para usar routerLink
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent {
  @Input() usuario!: User;
}