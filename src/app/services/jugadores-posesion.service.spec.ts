import { TestBed } from '@angular/core/testing';

import { JugadoresPosesionService } from './jugadores-posesion.service';

describe('JugadoresPosesionService', () => {
  let service: JugadoresPosesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresPosesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
