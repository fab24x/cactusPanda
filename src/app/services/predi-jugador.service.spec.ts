import { TestBed } from '@angular/core/testing';

import { PrediJugadorService } from './predi-jugador.service';

describe('PrediJugadorService', () => {
  let service: PrediJugadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrediJugadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
