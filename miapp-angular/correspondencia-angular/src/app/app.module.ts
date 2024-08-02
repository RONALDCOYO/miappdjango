import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuarios/usuarios.component';
import { CorrespondenciaComponent } from './components/correspondencia/correspondencia.component';
import { RolesComponent } from './components/roles/roles.component';
import { UnidadesDepartamentosComponent } from './components/unidades-departamentos/unidades-departamentos.component';
import { TiposDocumentoComponent } from './components/tipos-documento/tipos-documento.component';
import { ConsecutivosComponent } from './components/consecutivos/consecutivos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CorrespondenciaComponent,
    RolesComponent,
    UnidadesDepartamentosComponent,
    TiposDocumentoComponent,
    ConsecutivosComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
