import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDateBookingDialog } from './exam-date-booking-dialog';

describe('ExamDateBookingDialog', () => {
  let component: ExamDateBookingDialog;
  let fixture: ComponentFixture<ExamDateBookingDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamDateBookingDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamDateBookingDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
