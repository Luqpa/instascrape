import { TestBed } from '@angular/core/testing';

import { InstaApiService } from './insta-api.service';

describe('InstaApiService', () => {
  let service: InstaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
