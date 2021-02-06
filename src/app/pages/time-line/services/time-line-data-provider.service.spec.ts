import { TestBed } from '@angular/core/testing';

import { TimeLineDataProviderService } from './time-line-data-provider.service';

describe('TimeLineDataProviderService', () => {
  let service: TimeLineDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeLineDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
