import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrscAssessment } from './frsc-assessment';

describe('FrscAssessment', () => {
  let component: FrscAssessment;
  let fixture: ComponentFixture<FrscAssessment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrscAssessment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrscAssessment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
