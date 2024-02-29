import { TestBed } from '@angular/core/testing';

import { ApiCarWashService } from './api-car-wash.service';

describe('ApiCarWashService', () => {
  let service: ApiCarWashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCarWashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
