import { TestBed, inject } from '@angular/core/testing';

import { ServicioTecService } from './servicio-tec.service';

describe('ServicioTecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioTecService]
    });
  });

  it('should be created', inject([ServicioTecService], (service: ServicioTecService) => {
    expect(service).toBeTruthy();
  }));
});
