import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDepartamentosComponent } from './unidades-departamentos.component';

describe('UnidadesDepartamentosComponent', () => {
  let component: UnidadesDepartamentosComponent;
  let fixture: ComponentFixture<UnidadesDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnidadesDepartamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
