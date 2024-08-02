// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuarios/usuarios.component';
import { CorrespondenciaComponent } from './components/correspondencia/correspondencia.component';
import { RolesComponent } from './components/roles/roles.component';
import { UnidadesDepartamentosComponent } from './components/unidades-departamentos/unidades-departamentos.component';
import { TiposDocumentoComponent } from './components/tipos-documento/tipos-documento.component';


const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  {path: 'correspondencia', component: CorrespondenciaComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'unidades-departamentos', component: UnidadesDepartamentosComponent},
  {path: 'tipos-documento', component: TiposDocumentoComponent},
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }, // Redirige a la lista de usuarios por defecto
  { path: '**', redirectTo: '/usuarios' } // Redirige cualquier ruta no encontrada a usuarios
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
