// src/app/components/unidades-departamentos.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-unidades-departamentos',
  templateUrl: './unidades-departamentos.component.html',
  styleUrls: ['./unidades-departamentos.component.css']
})
export class UnidadesDepartamentosComponent implements OnInit {
  unidadesDepartamentos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUnidadesDepartamentos().subscribe(data => {
      this.unidadesDepartamentos = data;
    });
  }
}
