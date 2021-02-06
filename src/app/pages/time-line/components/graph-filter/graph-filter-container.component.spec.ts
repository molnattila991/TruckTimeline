import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFilterContainerComponent } from './graph-filter-container.component';

describe('GraphFilterContainerComponent', () => {
  let component: GraphFilterContainerComponent;
  let fixture: ComponentFixture<GraphFilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphFilterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
