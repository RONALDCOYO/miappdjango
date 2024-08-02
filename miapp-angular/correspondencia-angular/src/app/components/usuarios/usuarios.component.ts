// usuario.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuarioComponent {
  user: any = {
    nombre: '',
    email: '',
    password_hash: '',
    rol: '',
    
  };
usuarios: any;

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    this.apiService.createUsuario(this.user).subscribe(response => {
      console.log('Usuario guardado', response);
      // Puedes redirigir o mostrar un mensaje
    }, error => {
      console.error('Error al guardar el usuario', error);
    });
  }
}