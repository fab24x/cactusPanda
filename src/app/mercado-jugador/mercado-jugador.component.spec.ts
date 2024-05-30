import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercadoJugadorComponent } from './mercado-jugador.component';

describe('MercadoJugadorComponent', () => {
  let component: MercadoJugadorComponent;
  let fixture: ComponentFixture<MercadoJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MercadoJugadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MercadoJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
