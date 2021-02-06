import { TestBed } from '@angular/core/testing';

import { TimeLineFilterService } from './time-line-filter.service';

describe('TimeLineFilterService', () => {
  let service: TimeLineFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeLineFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
