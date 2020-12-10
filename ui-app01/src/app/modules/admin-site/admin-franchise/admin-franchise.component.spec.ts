import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFranchiseComponent } from './admin-franchise.component';

describe('AdminFranchiseComponent', () => {
  let component: AdminFranchiseComponent;
  let fixture: ComponentFixture<AdminFranchiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFranchiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
