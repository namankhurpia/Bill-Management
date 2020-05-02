import { TestBed } from '@angular/core/testing';

import { SigninholderService } from './signinholder.service';

describe('SigninholderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigninholderService = TestBed.get(SigninholderService);
    expect(service).toBeTruthy();
  });
});
