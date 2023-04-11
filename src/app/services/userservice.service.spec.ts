import { TestBed } from '@angular/core/testing';

import { UserserviceService } from './userservice.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserserviceService', () => {
  let service: UserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
