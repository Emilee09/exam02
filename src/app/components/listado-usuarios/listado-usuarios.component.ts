import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { User } from '../../interfaces/user.interface';
import { UsuarioCardComponent } from '../usuario-card/usuario-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true, // Añade esto
  imports: [CommonModule, UsuarioCardComponent], // Añade los componentes/directivas necesarias
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  usuarios: User[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }
}