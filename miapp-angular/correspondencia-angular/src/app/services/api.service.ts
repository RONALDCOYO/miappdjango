import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'Http://localHost:8000'; //URL de la api en Django

  constructor(private http: HttpClient) { }

 
  //Metodo para obtener usuarios, correspondencia, roles, departamentos, documentos

  getUsuarios(): Observable<any> {
     return this.http.get<any>(`${this.apiUrl}/usuarios/`);
  }

  getCorrespondencia(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/correspondencia/`);
  }

  getRoles(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/roles/`);
  }

  getUnidadesDepartamentos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/unidades-departamentos/`);
  }

  getTiposDocumento(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tipos-documento/`);
  }
  
  // Método para crear un nuevo usuario
  createUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios/`, usuario);
  }

  // Método para actualizar un usuario
  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/usuarios/${id}/`, usuario);
  }

  // Método para eliminar un usuario
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/usuarios/${id}/`);
  }
}
