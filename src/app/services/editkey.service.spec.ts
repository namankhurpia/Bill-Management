import { TestBed } from '@angular/core/testing';

import { EditkeyService } from './editkey.service';

describe('EditkeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditkeyService = TestBed.get(EditkeyService);
    expect(service).toBeTruthy();
  });
});
