import { TestBed } from '@angular/core/testing';

import { TimeLineBaseService } from './time-line-base.service';

describe('TimeLineBaseService', () => {
  let service: TimeLineBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeLineBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
