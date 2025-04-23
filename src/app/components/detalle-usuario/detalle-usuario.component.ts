import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  usuario!: User;
  mostrarEmpresa = false;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuariosService.getUsuarioById(id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  toggleEmpresa(): void {
    this.mostrarEmpresa = !this.mostrarEmpresa;
  }
}