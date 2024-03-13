import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteTecnicoComponent } from './soporte-tecnico.component';

describe('SoporteTecnicoComponent', () => {
  let component: SoporteTecnicoComponent;
  let fixture: ComponentFixture<SoporteTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoporteTecnicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoporteTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
