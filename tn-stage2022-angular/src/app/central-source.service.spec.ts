import { TestBed } from '@angular/core/testing';

import { CentralSourceService } from './central-source.service';

describe('CentralSourceService', () => {
  let service: CentralSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
