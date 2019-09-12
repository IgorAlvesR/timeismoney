import { TestBed } from '@angular/core/testing';

import { DeslocamentoService } from './deslocamento.service';

describe('DeslocamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeslocamentoService = TestBed.get(DeslocamentoService);
    expect(service).toBeTruthy();
  });
});
