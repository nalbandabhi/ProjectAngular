import { TestBed } from '@angular/core/testing';

import { CustomerserviceService } from './customerservice.service';
import { HttpClientModule } from '@angular/common/http';

describe('CustomerserviceService', () => {
  let service: CustomerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(CustomerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
