import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialUsuariosComponent } from './historial-usuarios.component';

describe('HistorialUsuariosComponent', () => {
  let component: HistorialUsuariosComponent;
  let fixture: ComponentFixture<HistorialUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
