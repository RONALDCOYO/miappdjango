// src/app/components/correspondencia.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-correspondencia',
  templateUrl: './correspondencia.component.html',
  styleUrls: ['./correspondencia.component.css']
})
export class CorrespondenciaComponent implements OnInit {
  correspondencia: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCorrespondencia().subscribe(data => {
      this.correspondencia = data;
    });
  }
}
