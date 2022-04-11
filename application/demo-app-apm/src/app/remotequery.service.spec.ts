import { TestBed } from '@angular/core/testing';

import { RemotequeryService } from './remotequery.service';

describe('RemotequeryService', () => {
  let service: RemotequeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemotequeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
