import { TestBed } from '@angular/core/testing';

import { CbalanceService } from './cbalance.service';

describe('CbalanceService', () => {
  let service: CbalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
