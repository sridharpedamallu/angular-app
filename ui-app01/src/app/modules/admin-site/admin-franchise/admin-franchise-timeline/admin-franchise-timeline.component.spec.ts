import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFranchiseTimelineComponent } from './admin-franchise-timeline.component';

describe('AdminFranchiseTimelineComponent', () => {
  let component: AdminFranchiseTimelineComponent;
  let fixture: ComponentFixture<AdminFranchiseTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFranchiseTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFranchiseTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
