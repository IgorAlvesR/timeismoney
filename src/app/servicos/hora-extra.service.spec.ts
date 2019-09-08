import { TestBed } from '@angular/core/testing';

import { HoraExtraService } from './hora-extra.service';

describe('HoraExtraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoraExtraService = TestBed.get(HoraExtraService);
    expect(service).toBeTruthy();
  });
});
