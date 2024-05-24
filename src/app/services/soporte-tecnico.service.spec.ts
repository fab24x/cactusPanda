import { TestBed } from '@angular/core/testing';

import { SoporteTecnicoService } from './soporte-tecnico.service';

describe('SoporteTecnicoService', () => {
  let service: SoporteTecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoporteTecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
