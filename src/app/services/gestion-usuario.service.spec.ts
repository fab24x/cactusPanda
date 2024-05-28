import { TestBed } from '@angular/core/testing';

import { GestionUsuarioService } from './gestion-usuario.service';

describe('GestionUsuarioService', () => {
  let service: GestionUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
