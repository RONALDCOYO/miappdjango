import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CorrespondenciaService {

  private apiUrl = 'http://localhost:8000/correspondencia/'; // URL de tu API en Django

  constructor(private http: HttpClient) { }

  obtenerCorrespondencia(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Otros métodos para POST, PUT, DELETE, etc.
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'correspondencia-angular';
}
