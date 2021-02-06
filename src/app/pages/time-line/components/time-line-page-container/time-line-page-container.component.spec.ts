import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLinePageContainerComponent } from './time-line-page-container.component';

describe('TimeLinePageContainerComponent', () => {
  let component: TimeLinePageContainerComponent;
  let fixture: ComponentFixture<TimeLinePageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLinePageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLinePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
