import { TestBed } from '@angular/core/testing';

import { TorreUserService } from './torre-user.service';

describe('TorreUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TorreUserService = TestBed.get(TorreUserService);
    expect(service).toBeTruthy();
  });
});
