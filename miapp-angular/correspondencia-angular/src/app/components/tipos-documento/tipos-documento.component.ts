// src/app/components/tipos-documento.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tipos-documento',
  templateUrl: './tipos-documento.component.html',
  styleUrls: ['./tipos-documento.component.css']
})
export class TiposDocumentoComponent implements OnInit {
  tiposDocumento: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTiposDocumento().subscribe(data => {
      this.tiposDocumento = data;
    });
  }
}
