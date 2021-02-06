import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GantDiagramWrapperComponent } from './gant-diagram-wrapper.component';

describe('GantDiagramWrapperComponent', () => {
  let component: GantDiagramWrapperComponent;
  let fixture: ComponentFixture<GantDiagramWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GantDiagramWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GantDiagramWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
