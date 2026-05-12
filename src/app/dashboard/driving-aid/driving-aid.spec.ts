import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingAid } from './driving-aid';

describe('DrivingAid', () => {
  let component: DrivingAid;
  let fixture: ComponentFixture<DrivingAid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrivingAid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingAid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
