import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';

export const routes: Routes = [
  { path: 'usuarios', component: ListadoUsuariosComponent },
  { path: 'usuario/:id', component: DetalleUsuarioComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: '**', redirectTo: '/usuarios' } // Redirige cualquier ruta no encontrada
];