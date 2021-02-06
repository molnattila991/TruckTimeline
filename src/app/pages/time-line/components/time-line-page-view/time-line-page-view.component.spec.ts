import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLinePageViewComponent } from './time-line-page-view.component';

describe('TimeLinePageViewComponent', () => {
  let component: TimeLinePageViewComponent;
  let fixture: ComponentFixture<TimeLinePageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLinePageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLinePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
