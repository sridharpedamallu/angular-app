import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFrachiseComponent } from './manage-frachise.component';

describe('ManageFrachiseComponent', () => {
  let component: ManageFrachiseComponent;
  let fixture: ComponentFixture<ManageFrachiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFrachiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFrachiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
