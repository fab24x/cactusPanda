import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMercadoComponent } from './vista-mercado.component';

describe('VistaMercadoComponent', () => {
  let component: VistaMercadoComponent;
  let fixture: ComponentFixture<VistaMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaMercadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
